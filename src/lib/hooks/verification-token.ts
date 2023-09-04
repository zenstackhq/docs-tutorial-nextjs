/* eslint-disable */
import type { Prisma, VerificationToken } from '@prisma/client';
import { useContext } from 'react';
import {
    RequestHandlerContext,
    type RequestOptions,
    type PickEnumerable,
    type CheckSelect,
} from '@zenstackhq/swr/runtime';
import * as request from '@zenstackhq/swr/runtime';

export function useMutateVerificationToken() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/verificationToken/find`,
        `${endpoint}/verificationToken/aggregate`,
        `${endpoint}/verificationToken/count`,
        `${endpoint}/verificationToken/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createVerificationToken<T extends Prisma.VerificationTokenCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>,
    ) {
        return await request.post<CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>, true>(
            `${endpoint}/verificationToken/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateVerificationToken<T extends Prisma.VerificationTokenUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>,
    ) {
        return await request.put<Prisma.VerificationTokenGetPayload<T>, true>(
            `${endpoint}/verificationToken/update`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updateManyVerificationToken<T extends Prisma.VerificationTokenUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(
            `${endpoint}/verificationToken/updateMany`,
            args,
            mutate,
            fetch,
            false,
        );
    }

    async function upsertVerificationToken<T extends Prisma.VerificationTokenUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>,
    ) {
        return await request.post<Prisma.VerificationTokenGetPayload<T>, true>(
            `${endpoint}/verificationToken/upsert`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteVerificationToken<T extends Prisma.VerificationTokenDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>,
    ) {
        return await request.del<Prisma.VerificationTokenGetPayload<T>, true>(
            `${endpoint}/verificationToken/delete`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function deleteManyVerificationToken<T extends Prisma.VerificationTokenDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(
            `${endpoint}/verificationToken/deleteMany`,
            args,
            mutate,
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

export function useFindManyVerificationToken<T extends Prisma.VerificationTokenFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>,
    options?: RequestOptions<Array<Prisma.VerificationTokenGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.VerificationTokenGetPayload<T>>>(
        `${endpoint}/verificationToken/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueVerificationToken<T extends Prisma.VerificationTokenFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueArgs>,
    options?: RequestOptions<Prisma.VerificationTokenGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.VerificationTokenGetPayload<T>>(
        `${endpoint}/verificationToken/findUnique`,
        args,
        options,
        fetch,
    );
}

export function useFindFirstVerificationToken<T extends Prisma.VerificationTokenFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstArgs>,
    options?: RequestOptions<Prisma.VerificationTokenGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.VerificationTokenGetPayload<T>>(
        `${endpoint}/verificationToken/findFirst`,
        args,
        options,
        fetch,
    );
}

export function useAggregateVerificationToken<T extends Prisma.VerificationTokenAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.VerificationTokenAggregateArgs>,
    options?: RequestOptions<Prisma.GetVerificationTokenAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetVerificationTokenAggregateType<T>>(
        `${endpoint}/verificationToken/aggregate`,
        args,
        options,
        fetch,
    );
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
    options?: RequestOptions<
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
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
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
    >(`${endpoint}/verificationToken/groupBy`, args, options, fetch);
}

export function useCountVerificationToken<T extends Prisma.VerificationTokenCountArgs>(
    args?: Prisma.Subset<T, Prisma.VerificationTokenCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType>
            : number
    >(`${endpoint}/verificationToken/count`, args, options, fetch);
}
