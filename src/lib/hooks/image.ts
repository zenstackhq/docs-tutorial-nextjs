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

export function useCreateImage(
    options?: MutationOptions<
        Prisma.ImageGetPayload<Prisma.ImageCreateArgs> | undefined,
        unknown,
        Prisma.ImageCreateArgs
    >,
) {
    const mutation = request.useModelMutation('Image', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ImageCreateArgs>(args: Prisma.SelectSubset<T, Prisma.ImageCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ImageGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyImage<T extends Prisma.ImageFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ImageFindManyArgs>,
    options?: QueryOptions<Array<Prisma.ImageGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Image', 'findMany', args, options);
}

export function useInfiniteFindManyImage<
    T extends Prisma.ImageFindManyArgs,
    R extends Array<Prisma.ImageGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.ImageFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.ImageGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Image', 'findMany', getNextArgs, options);
}

export function useFindUniqueImage<T extends Prisma.ImageFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ImageFindUniqueArgs>,
    options?: QueryOptions<Prisma.ImageGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Image', 'findUnique', args, options);
}

export function useFindFirstImage<T extends Prisma.ImageFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.ImageFindFirstArgs>,
    options?: QueryOptions<Prisma.ImageGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Image', 'findFirst', args, options);
}

export function useUpdateImage(
    options?: MutationOptions<
        Prisma.ImageGetPayload<Prisma.ImageUpdateArgs> | undefined,
        unknown,
        Prisma.ImageUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('Image', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ImageUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.ImageUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ImageGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyImage(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.ImageUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('Image', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.ImageUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.ImageUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertImage(
    options?: MutationOptions<
        Prisma.ImageGetPayload<Prisma.ImageUpsertArgs> | undefined,
        unknown,
        Prisma.ImageUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('Image', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ImageUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.ImageUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ImageGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteImage(
    options?: MutationOptions<
        Prisma.ImageGetPayload<Prisma.ImageDeleteArgs> | undefined,
        unknown,
        Prisma.ImageDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('Image', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ImageDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.ImageDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ImageGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyImage(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.ImageDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('Image', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.ImageDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.ImageDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateImage<T extends Prisma.ImageAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.ImageAggregateArgs>,
    options?: QueryOptions<Prisma.GetImageAggregateType<T>>,
) {
    return request.useModelQuery('Image', 'aggregate', args, options);
}

export function useGroupByImage<
    T extends Prisma.ImageGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.ImageGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.ImageGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.ImageGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.ImageGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.ImageGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.ImageGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.ImageGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Image', 'groupBy', args, options);
}

export function useCountImage<T extends Prisma.ImageCountArgs>(
    args?: Prisma.Subset<T, Prisma.ImageCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ImageCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Image', 'count', args, options);
}
