/* eslint-disable */
import type { Prisma } from "@zenstackhq/runtime/prisma";
import { type GetNextArgs, type QueryOptions, type InfiniteQueryOptions, type MutationOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useCreateContent(options?: MutationOptions<Prisma.ContentGetPayload<Prisma.ContentCreateArgs> | undefined, unknown, Prisma.ContentCreateArgs>) {
    const mutation = request.useModelMutation('Content', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ContentCreateArgs>(args: Prisma.SelectSubset<T, Prisma.ContentCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ContentGetPayload<T> | undefined>;
        }
    };
}

export function useFindManyContent<T extends Prisma.ContentFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.ContentFindManyArgs>, options?: QueryOptions<Array<Prisma.ContentGetPayload<T> & { $optimistic?: boolean }>>) {
    return request.useModelQuery('Content', 'findMany', args, options);
}

export function useInfiniteFindManyContent<T extends Prisma.ContentFindManyArgs, R extends Array<Prisma.ContentGetPayload<T>>>(getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.ContentFindManyArgs> | undefined, R>, options?: InfiniteQueryOptions<Array<Prisma.ContentGetPayload<T>>>) {
    return request.useInfiniteModelQuery('Content', 'findMany', getNextArgs, options);
}

export function useFindUniqueContent<T extends Prisma.ContentFindUniqueArgs>(args?: Prisma.SelectSubset<T, Prisma.ContentFindUniqueArgs>, options?: QueryOptions<Prisma.ContentGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Content', 'findUnique', args, options);
}

export function useFindFirstContent<T extends Prisma.ContentFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.ContentFindFirstArgs>, options?: QueryOptions<Prisma.ContentGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Content', 'findFirst', args, options);
}

export function useUpdateContent(options?: MutationOptions<Prisma.ContentGetPayload<Prisma.ContentUpdateArgs> | undefined, unknown, Prisma.ContentUpdateArgs>) {
    const mutation = request.useModelMutation('Content', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ContentUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.ContentUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ContentGetPayload<T> | undefined>;
        }
    };
}

export function useUpdateManyContent(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.ContentUpdateManyArgs>) {
    const mutation = request.useModelMutation('Content', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.ContentUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.ContentUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useUpsertContent(options?: MutationOptions<Prisma.ContentGetPayload<Prisma.ContentUpsertArgs> | undefined, unknown, Prisma.ContentUpsertArgs>) {
    const mutation = request.useModelMutation('Content', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ContentUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.ContentUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ContentGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteContent(options?: MutationOptions<Prisma.ContentGetPayload<Prisma.ContentDeleteArgs> | undefined, unknown, Prisma.ContentDeleteArgs>) {
    const mutation = request.useModelMutation('Content', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.ContentDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.ContentDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.ContentGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteManyContent(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.ContentDeleteManyArgs>) {
    const mutation = request.useModelMutation('Content', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.ContentDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.ContentDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useAggregateContent<T extends Prisma.ContentAggregateArgs>(args?: Prisma.Subset<T, Prisma.ContentAggregateArgs>, options?: QueryOptions<Prisma.GetContentAggregateType<T>>) {
    return request.useModelQuery('Content', 'aggregate', args, options);
}

export function useGroupByContent<T extends Prisma.ContentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.ContentGroupByArgs['orderBy'] } : { orderBy?: Prisma.ContentGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]>(args?: Prisma.SubsetIntersection<T, Prisma.ContentGroupByArgs, OrderByArg> & InputErrors, options?: QueryOptions<{} extends InputErrors ?
        Array<PickEnumerable<Prisma.ContentGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof Prisma.ContentGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.ContentGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.ContentGroupByOutputType[P]>
            }
        > : InputErrors>) {
    return request.useModelQuery('Content', 'groupBy', args, options);
}

export function useCountContent<T extends Prisma.ContentCountArgs>(args?: Prisma.Subset<T, Prisma.ContentCountArgs>, options?: QueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.ContentCountAggregateOutputType> : number>) {
    return request.useModelQuery('Content', 'count', args, options);
}
