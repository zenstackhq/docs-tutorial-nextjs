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

export function useCreatePost(
    options?: MutationOptions<Prisma.PostGetPayload<Prisma.PostCreateArgs> | undefined, unknown, Prisma.PostCreateArgs>,
) {
    const mutation = request.useModelMutation('Post', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.PostCreateArgs>(args: Prisma.SelectSubset<T, Prisma.PostCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.PostGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyPost<T extends Prisma.PostFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>,
    options?: QueryOptions<Array<Prisma.PostGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Post', 'findMany', args, options);
}

export function useInfiniteFindManyPost<T extends Prisma.PostFindManyArgs, R extends Array<Prisma.PostGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.PostFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.PostGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Post', 'findMany', getNextArgs, options);
}

export function useFindUniquePost<T extends Prisma.PostFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>,
    options?: QueryOptions<Prisma.PostGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Post', 'findUnique', args, options);
}

export function useFindFirstPost<T extends Prisma.PostFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindFirstArgs>,
    options?: QueryOptions<Prisma.PostGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Post', 'findFirst', args, options);
}

export function useUpdatePost(
    options?: MutationOptions<Prisma.PostGetPayload<Prisma.PostUpdateArgs> | undefined, unknown, Prisma.PostUpdateArgs>,
) {
    const mutation = request.useModelMutation('Post', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.PostUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.PostGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyPost(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.PostUpdateManyArgs>) {
    const mutation = request.useModelMutation('Post', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.PostUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertPost(
    options?: MutationOptions<Prisma.PostGetPayload<Prisma.PostUpsertArgs> | undefined, unknown, Prisma.PostUpsertArgs>,
) {
    const mutation = request.useModelMutation('Post', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.PostUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.PostUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.PostGetPayload<T> | undefined>;
        },
    };
}

export function useDeletePost(
    options?: MutationOptions<Prisma.PostGetPayload<Prisma.PostDeleteArgs> | undefined, unknown, Prisma.PostDeleteArgs>,
) {
    const mutation = request.useModelMutation('Post', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.PostDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.PostDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.PostGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyPost(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.PostDeleteManyArgs>) {
    const mutation = request.useModelMutation('Post', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.PostDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregatePost<T extends Prisma.PostAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.PostAggregateArgs>,
    options?: QueryOptions<Prisma.GetPostAggregateType<T>>,
) {
    return request.useModelQuery('Post', 'aggregate', args, options);
}

export function useGroupByPost<
    T extends Prisma.PostGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PostGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.PostGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.PostGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.PostGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.PostGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.PostGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.PostGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Post', 'groupBy', args, options);
}

export function useCountPost<T extends Prisma.PostCountArgs>(
    args?: Prisma.Subset<T, Prisma.PostCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Post', 'count', args, options);
}
