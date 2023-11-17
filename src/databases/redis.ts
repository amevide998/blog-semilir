import Redis, { RedisOptions } from 'ioredis';
import configuration from './configuration';

function getRedisConfiguration(): {
    port: string | undefined;
    host: string | undefined;
    password: string | undefined;
    username: string | undefined;
    db: string | undefined;
} {
    return configuration.redis;
}


function createRedisInstance(
    config = getRedisConfiguration()
) {
    try {
        const options: RedisOptions = {
            host: config.host,
            lazyConnect: true,
            showFriendlyErrorStack: true,
            enableAutoPipelining: true,
            maxRetriesPerRequest: 0,
            retryStrategy: (times: number) => {
                if (times > 3) {
                    throw new Error(`[Redis] Could not connect after ${times} attempts`);
                }

                return Math.min(times * 200, 1000);
            },
        };

        if (config.port) {
            options.port = Number(config.port);
        }

        if (config.password) {
            options.password = config.password;
        }

        if (config.username) {
            options.username = config.username;
        }

        if (config.db) {
            options.db = Number(config.db);
        }

        const redis = new Redis(options);

        redis.on('error', (error: unknown) => {
            console.warn('[Redis] Error connecting', error);
        });

        return redis;
    } catch (e) {
        throw new Error(`[Redis] Could not create a Redis instance`);
    }
}

export const redis = createRedisInstance();