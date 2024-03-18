/* eslint-disable */
import type { Prisma } from '@zenstackhq/runtime/prisma';
import {
    type GetNextArgs,
    type QueryOptions,
    type InfiniteQueryOptions,
    type MutationOptions,
    type PickEnumerable,
} from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useCreateLike(
    options?: MutationOptions<Prisma.LikeGetPayload<Prisma.LikeCreateArgs> | undefined, unknown, Prisma.LikeCreateArgs>,
) {
    const mutation = request.useModelMutation('Like', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.LikeCreateArgs>(args: Prisma.SelectSubset<T, Prisma.LikeCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.LikeGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyLike<T extends Prisma.LikeFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.LikeFindManyArgs>,
    options?: QueryOptions<Array<Prisma.LikeGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Like', 'findMany', args, options);
}

export function useInfiniteFindManyLike<T extends Prisma.LikeFindManyArgs, R extends Array<Prisma.LikeGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.LikeFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.LikeGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Like', 'findMany', getNextArgs, options);
}

export function useFindUniqueLike<T extends Prisma.LikeFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.LikeFindUniqueArgs>,
    options?: QueryOptions<Prisma.LikeGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Like', 'findUnique', args, options);
}

export function useFindFirstLike<T extends Prisma.LikeFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.LikeFindFirstArgs>,
    options?: QueryOptions<Prisma.LikeGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Like', 'findFirst', args, options);
}

export function useUpdateLike(
    options?: MutationOptions<Prisma.LikeGetPayload<Prisma.LikeUpdateArgs> | undefined, unknown, Prisma.LikeUpdateArgs>,
) {
    const mutation = request.useModelMutation('Like', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.LikeUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.LikeUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.LikeGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyLike(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.LikeUpdateManyArgs>) {
    const mutation = request.useModelMutation('Like', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.LikeUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.LikeUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertLike(
    options?: MutationOptions<Prisma.LikeGetPayload<Prisma.LikeUpsertArgs> | undefined, unknown, Prisma.LikeUpsertArgs>,
) {
    const mutation = request.useModelMutation('Like', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.LikeUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.LikeUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.LikeGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteLike(
    options?: MutationOptions<Prisma.LikeGetPayload<Prisma.LikeDeleteArgs> | undefined, unknown, Prisma.LikeDeleteArgs>,
) {
    const mutation = request.useModelMutation('Like', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.LikeDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.LikeDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.LikeGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyLike(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.LikeDeleteManyArgs>) {
    const mutation = request.useModelMutation('Like', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.LikeDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.LikeDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateLike<T extends Prisma.LikeAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.LikeAggregateArgs>,
    options?: QueryOptions<Prisma.GetLikeAggregateType<T>>,
) {
    return request.useModelQuery('Like', 'aggregate', args, options);
}

export function useGroupByLike<
    T extends Prisma.LikeGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.LikeGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.LikeGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args?: Prisma.SubsetIntersection<T, Prisma.LikeGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.LikeGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.LikeGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.LikeGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.LikeGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Like', 'groupBy', args, options);
}

export function useCountLike<T extends Prisma.LikeCountArgs>(
    args?: Prisma.Subset<T, Prisma.LikeCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.LikeCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Like', 'count', args, options);
}
