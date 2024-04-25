/* eslint-disable */
import type { Prisma } from ".zenstack/models";
import { type GetNextArgs, type QueryOptions, type InfiniteQueryOptions, type MutationOptions, type PickEnumerable } from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

export function useCreateSession(options?: MutationOptions<Prisma.SessionGetPayload<Prisma.SessionCreateArgs> | undefined, unknown, Prisma.SessionCreateArgs>) {
    const mutation = request.useModelMutation('Session', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SessionCreateArgs>(args: Prisma.SelectSubset<T, Prisma.SessionCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SessionGetPayload<T> | undefined>;
        }
    };
}

export function useFindManySession<T extends Prisma.SessionFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>, options?: QueryOptions<Array<Prisma.SessionGetPayload<T> & { $optimistic?: boolean }>>) {
    return request.useModelQuery('Session', 'findMany', args, options);
}

export function useInfiniteFindManySession<T extends Prisma.SessionFindManyArgs, R extends Array<Prisma.SessionGetPayload<T>>>(getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.SessionFindManyArgs> | undefined, R>, options?: InfiniteQueryOptions<Array<Prisma.SessionGetPayload<T>>>) {
    return request.useInfiniteModelQuery('Session', 'findMany', getNextArgs, options);
}

export function useFindUniqueSession<T extends Prisma.SessionFindUniqueArgs>(args?: Prisma.SelectSubset<T, Prisma.SessionFindUniqueArgs>, options?: QueryOptions<Prisma.SessionGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Session', 'findUnique', args, options);
}

export function useFindFirstSession<T extends Prisma.SessionFindFirstArgs>(args?: Prisma.SelectSubset<T, Prisma.SessionFindFirstArgs>, options?: QueryOptions<Prisma.SessionGetPayload<T> & { $optimistic?: boolean }>) {
    return request.useModelQuery('Session', 'findFirst', args, options);
}

export function useUpdateSession(options?: MutationOptions<Prisma.SessionGetPayload<Prisma.SessionUpdateArgs> | undefined, unknown, Prisma.SessionUpdateArgs>) {
    const mutation = request.useModelMutation('Session', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SessionUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SessionGetPayload<T> | undefined>;
        }
    };
}

export function useUpdateManySession(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SessionUpdateManyArgs>) {
    const mutation = request.useModelMutation('Session', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SessionUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.SessionUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useUpsertSession(options?: MutationOptions<Prisma.SessionGetPayload<Prisma.SessionUpsertArgs> | undefined, unknown, Prisma.SessionUpsertArgs>) {
    const mutation = request.useModelMutation('Session', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SessionUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.SessionUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SessionGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteSession(options?: MutationOptions<Prisma.SessionGetPayload<Prisma.SessionDeleteArgs> | undefined, unknown, Prisma.SessionDeleteArgs>) {
    const mutation = request.useModelMutation('Session', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.SessionDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.SessionDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.SessionGetPayload<T> | undefined>;
        }
    };
}

export function useDeleteManySession(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.SessionDeleteManyArgs>) {
    const mutation = request.useModelMutation('Session', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.SessionDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.SessionDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        }
    };
}

export function useAggregateSession<T extends Prisma.SessionAggregateArgs>(args?: Prisma.Subset<T, Prisma.SessionAggregateArgs>, options?: QueryOptions<Prisma.GetSessionAggregateType<T>>) {
    return request.useModelQuery('Session', 'aggregate', args, options);
}

export function useGroupBySession<T extends Prisma.SessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SessionGroupByArgs['orderBy'] } : { orderBy?: Prisma.SessionGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    }[OrderFields]>(args?: Prisma.SubsetIntersection<T, Prisma.SessionGroupByArgs, OrderByArg> & InputErrors, options?: QueryOptions<{} extends InputErrors ?
        Array<PickEnumerable<Prisma.SessionGroupByOutputType, T['by']> &
            {
                [P in ((keyof T) & (keyof Prisma.SessionGroupByOutputType))]: P extends '_count'
                ? T[P] extends boolean
                ? number
                : Prisma.GetScalarType<T[P], Prisma.SessionGroupByOutputType[P]>
                : Prisma.GetScalarType<T[P], Prisma.SessionGroupByOutputType[P]>
            }
        > : InputErrors>) {
    return request.useModelQuery('Session', 'groupBy', args, options);
}

export function useCountSession<T extends Prisma.SessionCountArgs>(args?: Prisma.Subset<T, Prisma.SessionCountArgs>, options?: QueryOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType> : number>) {
    return request.useModelQuery('Session', 'count', args, options);
}
