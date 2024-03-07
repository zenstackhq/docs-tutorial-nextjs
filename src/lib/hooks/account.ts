/* eslint-disable */
import type { Prisma } from '@prisma/client';
import {
    type GetNextArgs,
    type QueryOptions,
    type InfiniteQueryOptions,
    type MutationOptions,
    type PickEnumerable,
    useHooksContext,
} from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

/** @deprecated Use mutation hooks (useCreateXXX, useUpdateXXX, etc.) instead. */
export function useMutateAccount() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('Account', metadata);

    /** @deprecated Use `useCreateAccount` hook instead. */
    async function createAccount<T extends Prisma.AccountCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.AccountCreateArgs>,
    ) {
        return await request.mutationRequest<Prisma.AccountGetPayload<Prisma.AccountCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/account/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateAccount` hook instead. */
    async function updateAccount<T extends Prisma.AccountUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>,
    ) {
        return await request.mutationRequest<Prisma.AccountGetPayload<Prisma.AccountUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/account/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManyAccount` hook instead. */
    async function updateManyAccount<T extends Prisma.AccountUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/account/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertAccount` hook instead. */
    async function upsertAccount<T extends Prisma.AccountUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>,
    ) {
        return await request.mutationRequest<Prisma.AccountGetPayload<Prisma.AccountUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/account/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteAccount` hook instead. */
    async function deleteAccount<T extends Prisma.AccountDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>,
    ) {
        return await request.mutationRequest<Prisma.AccountGetPayload<Prisma.AccountDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/account/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManyAccount` hook instead. */
    async function deleteManyAccount<T extends Prisma.AccountDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/account/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return { createAccount, updateAccount, updateManyAccount, upsertAccount, deleteAccount, deleteManyAccount };
}

export function useCreateAccount(
    options?: MutationOptions<
        Prisma.AccountGetPayload<Prisma.AccountCreateArgs> | undefined,
        unknown,
        Prisma.AccountCreateArgs
    >,
) {
    const mutation = request.useModelMutation('Account', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountCreateArgs>(args: Prisma.SelectSubset<T, Prisma.AccountCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.AccountGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyAccount<T extends Prisma.AccountFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>,
    options?: QueryOptions<Array<Prisma.AccountGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Account', 'findMany', args, options);
}

export function useInfiniteFindManyAccount<
    T extends Prisma.AccountFindManyArgs,
    R extends Array<Prisma.AccountGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.AccountFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.AccountGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Account', 'findMany', getNextArgs, options);
}

export function useFindUniqueAccount<T extends Prisma.AccountFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>,
    options?: QueryOptions<Prisma.AccountGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Account', 'findUnique', args, options);
}

export function useFindFirstAccount<T extends Prisma.AccountFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.AccountFindFirstArgs>,
    options?: QueryOptions<Prisma.AccountGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Account', 'findFirst', args, options);
}

export function useUpdateAccount(
    options?: MutationOptions<
        Prisma.AccountGetPayload<Prisma.AccountUpdateArgs> | undefined,
        unknown,
        Prisma.AccountUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('Account', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.AccountGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyAccount(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.AccountUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('Account', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountUpdateManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertAccount(
    options?: MutationOptions<
        Prisma.AccountGetPayload<Prisma.AccountUpsertArgs> | undefined,
        unknown,
        Prisma.AccountUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('Account', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.AccountUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.AccountGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteAccount(
    options?: MutationOptions<
        Prisma.AccountGetPayload<Prisma.AccountDeleteArgs> | undefined,
        unknown,
        Prisma.AccountDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('Account', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.AccountGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyAccount(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.AccountDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('Account', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.AccountDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AccountDeleteManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateAccount<T extends Prisma.AccountAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.AccountAggregateArgs>,
    options?: QueryOptions<Prisma.GetAccountAggregateType<T>>,
) {
    return request.useModelQuery('Account', 'aggregate', args, options);
}

export function useGroupByAccount<
    T extends Prisma.AccountGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.AccountGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.AccountGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.AccountGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.AccountGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.AccountGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.AccountGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Account', 'groupBy', args, options);
}

export function useCountAccount<T extends Prisma.AccountCountArgs>(
    args?: Prisma.Subset<T, Prisma.AccountCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AccountCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Account', 'count', args, options);
}
