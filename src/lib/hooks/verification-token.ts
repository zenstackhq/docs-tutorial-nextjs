/* eslint-disable */
import type { Prisma } from '@zenstackhq/runtime/prisma';
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
export function useMutateVerificationToken() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('VerificationToken', metadata);

    /** @deprecated Use `useCreateVerificationToken` hook instead. */
    async function createVerificationToken<T extends Prisma.VerificationTokenCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.VerificationTokenGetPayload<Prisma.VerificationTokenCreateArgs> | undefined,
            true
        >('POST', `${endpoint}/verificationToken/create`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useUpdateVerificationToken` hook instead. */
    async function updateVerificationToken<T extends Prisma.VerificationTokenUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.VerificationTokenGetPayload<Prisma.VerificationTokenUpdateArgs> | undefined,
            true
        >('PUT', `${endpoint}/verificationToken/update`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useUpdateManyVerificationToken` hook instead. */
    async function updateManyVerificationToken<T extends Prisma.VerificationTokenUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/verificationToken/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertVerificationToken` hook instead. */
    async function upsertVerificationToken<T extends Prisma.VerificationTokenUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.VerificationTokenGetPayload<Prisma.VerificationTokenUpsertArgs> | undefined,
            true
        >('POST', `${endpoint}/verificationToken/upsert`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useDeleteVerificationToken` hook instead. */
    async function deleteVerificationToken<T extends Prisma.VerificationTokenDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>,
    ) {
        return await request.mutationRequest<
            Prisma.VerificationTokenGetPayload<Prisma.VerificationTokenDeleteArgs> | undefined,
            true
        >('DELETE', `${endpoint}/verificationToken/delete`, args, invalidate, fetch, true);
    }

    /** @deprecated Use `useDeleteManyVerificationToken` hook instead. */
    async function deleteManyVerificationToken<T extends Prisma.VerificationTokenDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/verificationToken/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return {
        createVerificationToken,
        updateVerificationToken,
        updateManyVerificationToken,
        upsertVerificationToken,
        deleteVerificationToken,
        deleteManyVerificationToken,
    };
}

export function useCreateVerificationToken(
    options?: MutationOptions<
        Prisma.VerificationTokenGetPayload<Prisma.VerificationTokenCreateArgs> | undefined,
        unknown,
        Prisma.VerificationTokenCreateArgs
    >,
) {
    const mutation = request.useModelMutation('VerificationToken', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationTokenCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VerificationTokenGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyVerificationToken<T extends Prisma.VerificationTokenFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>,
    options?: QueryOptions<Array<Prisma.VerificationTokenGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('VerificationToken', 'findMany', args, options);
}

export function useInfiniteFindManyVerificationToken<
    T extends Prisma.VerificationTokenFindManyArgs,
    R extends Array<Prisma.VerificationTokenGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.VerificationTokenGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('VerificationToken', 'findMany', getNextArgs, options);
}

export function useFindUniqueVerificationToken<T extends Prisma.VerificationTokenFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueArgs>,
    options?: QueryOptions<Prisma.VerificationTokenGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('VerificationToken', 'findUnique', args, options);
}

export function useFindFirstVerificationToken<T extends Prisma.VerificationTokenFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstArgs>,
    options?: QueryOptions<Prisma.VerificationTokenGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('VerificationToken', 'findFirst', args, options);
}

export function useUpdateVerificationToken(
    options?: MutationOptions<
        Prisma.VerificationTokenGetPayload<Prisma.VerificationTokenUpdateArgs> | undefined,
        unknown,
        Prisma.VerificationTokenUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('VerificationToken', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationTokenUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VerificationTokenGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyVerificationToken(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationTokenUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('VerificationToken', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationTokenUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertVerificationToken(
    options?: MutationOptions<
        Prisma.VerificationTokenGetPayload<Prisma.VerificationTokenUpsertArgs> | undefined,
        unknown,
        Prisma.VerificationTokenUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('VerificationToken', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationTokenUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VerificationTokenGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteVerificationToken(
    options?: MutationOptions<
        Prisma.VerificationTokenGetPayload<Prisma.VerificationTokenDeleteArgs> | undefined,
        unknown,
        Prisma.VerificationTokenDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('VerificationToken', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationTokenDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.VerificationTokenGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyVerificationToken(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.VerificationTokenDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('VerificationToken', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.VerificationTokenDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateVerificationToken<T extends Prisma.VerificationTokenAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.VerificationTokenAggregateArgs>,
    options?: QueryOptions<Prisma.GetVerificationTokenAggregateType<T>>,
) {
    return request.useModelQuery('VerificationToken', 'aggregate', args, options);
}

export function useGroupByVerificationToken<
    T extends Prisma.VerificationTokenGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.VerificationTokenGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.VerificationTokenGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.VerificationTokenGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.VerificationTokenGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.VerificationTokenGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('VerificationToken', 'groupBy', args, options);
}

export function useCountVerificationToken<T extends Prisma.VerificationTokenCountArgs>(
    args?: Prisma.Subset<T, Prisma.VerificationTokenCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('VerificationToken', 'count', args, options);
}
