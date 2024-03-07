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
export function useMutateUser() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('User', metadata);

    /** @deprecated Use `useCreateUser` hook instead. */
    async function createUser<T extends Prisma.UserCreateArgs>(args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>) {
        return await request.mutationRequest<Prisma.UserGetPayload<Prisma.UserCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/user/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateUser` hook instead. */
    async function updateUser<T extends Prisma.UserUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>) {
        return await request.mutationRequest<Prisma.UserGetPayload<Prisma.UserUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/user/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManyUser` hook instead. */
    async function updateManyUser<T extends Prisma.UserUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/user/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertUser` hook instead. */
    async function upsertUser<T extends Prisma.UserUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.UserUpsertArgs>) {
        return await request.mutationRequest<Prisma.UserGetPayload<Prisma.UserUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/user/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteUser` hook instead. */
    async function deleteUser<T extends Prisma.UserDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>) {
        return await request.mutationRequest<Prisma.UserGetPayload<Prisma.UserDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/user/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManyUser` hook instead. */
    async function deleteManyUser<T extends Prisma.UserDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/user/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return { createUser, updateUser, updateManyUser, upsertUser, deleteUser, deleteManyUser };
}

export function useCreateUser(
    options?: MutationOptions<Prisma.UserGetPayload<Prisma.UserCreateArgs> | undefined, unknown, Prisma.UserCreateArgs>,
) {
    const mutation = request.useModelMutation('User', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.UserCreateArgs>(args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.UserGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyUser<T extends Prisma.UserFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
    options?: QueryOptions<Array<Prisma.UserGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('User', 'findMany', args, options);
}

export function useInfiniteFindManyUser<T extends Prisma.UserFindManyArgs, R extends Array<Prisma.UserGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.UserFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.UserGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('User', 'findMany', getNextArgs, options);
}

export function useFindUniqueUser<T extends Prisma.UserFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>,
    options?: QueryOptions<Prisma.UserGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('User', 'findUnique', args, options);
}

export function useFindFirstUser<T extends Prisma.UserFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>,
    options?: QueryOptions<Prisma.UserGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('User', 'findFirst', args, options);
}

export function useUpdateUser(
    options?: MutationOptions<Prisma.UserGetPayload<Prisma.UserUpdateArgs> | undefined, unknown, Prisma.UserUpdateArgs>,
) {
    const mutation = request.useModelMutation('User', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.UserUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.UserGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyUser(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.UserUpdateManyArgs>) {
    const mutation = request.useModelMutation('User', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.UserUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertUser(
    options?: MutationOptions<Prisma.UserGetPayload<Prisma.UserUpsertArgs> | undefined, unknown, Prisma.UserUpsertArgs>,
) {
    const mutation = request.useModelMutation('User', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.UserUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.UserUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.UserGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteUser(
    options?: MutationOptions<Prisma.UserGetPayload<Prisma.UserDeleteArgs> | undefined, unknown, Prisma.UserDeleteArgs>,
) {
    const mutation = request.useModelMutation('User', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.UserDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.UserGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyUser(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.UserDeleteManyArgs>) {
    const mutation = request.useModelMutation('User', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.UserDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateUser<T extends Prisma.UserAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.UserAggregateArgs>,
    options?: QueryOptions<Prisma.GetUserAggregateType<T>>,
) {
    return request.useModelQuery('User', 'aggregate', args, options);
}

export function useGroupByUser<
    T extends Prisma.UserGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.UserGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.UserGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.UserGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.UserGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.UserGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.UserGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('User', 'groupBy', args, options);
}

export function useCountUser<T extends Prisma.UserCountArgs>(
    args?: Prisma.Subset<T, Prisma.UserCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.UserCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('User', 'count', args, options);
}
