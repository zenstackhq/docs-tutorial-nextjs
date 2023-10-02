/* eslint-disable */
import type { Prisma, Post } from '@prisma/client';
import { useContext } from 'react';
import {
    RequestHandlerContext,
    type GetNextArgs,
    type RequestOptions,
    type InfiniteRequestOptions,
    type PickEnumerable,
    type CheckSelect,
} from '@zenstackhq/swr/runtime';
import * as request from '@zenstackhq/swr/runtime';

export function useMutatePost() {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/post/find`,
        `${endpoint}/post/aggregate`,
        `${endpoint}/post/count`,
        `${endpoint}/post/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createPost<T extends Prisma.PostCreateArgs>(args: Prisma.SelectSubset<T, Prisma.PostCreateArgs>) {
        return await request.post<CheckSelect<T, Post, Prisma.PostGetPayload<T>>, true>(
            `${endpoint}/post/create`,
            args,
            mutate,
            fetch,
            true,
        );
    }

    async function updatePost<T extends Prisma.PostUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>) {
        return await request.put<Prisma.PostGetPayload<T>, true>(`${endpoint}/post/update`, args, mutate, fetch, true);
    }

    async function updateManyPost<T extends Prisma.PostUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>,
    ) {
        return await request.put<Prisma.BatchPayload, false>(`${endpoint}/post/updateMany`, args, mutate, fetch, false);
    }

    async function upsertPost<T extends Prisma.PostUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.PostUpsertArgs>) {
        return await request.post<Prisma.PostGetPayload<T>, true>(`${endpoint}/post/upsert`, args, mutate, fetch, true);
    }

    async function deletePost<T extends Prisma.PostDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.PostDeleteArgs>) {
        return await request.del<Prisma.PostGetPayload<T>, true>(`${endpoint}/post/delete`, args, mutate, fetch, true);
    }

    async function deleteManyPost<T extends Prisma.PostDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>,
    ) {
        return await request.del<Prisma.BatchPayload, false>(`${endpoint}/post/deleteMany`, args, mutate, fetch, false);
    }
    return { createPost, updatePost, updateManyPost, upsertPost, deletePost, deleteManyPost };
}

export function useFindManyPost<T extends Prisma.PostFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>,
    options?: RequestOptions<Array<Prisma.PostGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.PostGetPayload<T>>>(`${endpoint}/post/findMany`, args, options, fetch);
}

export function useInfiniteFindManyPost<T extends Prisma.PostFindManyArgs, R extends Array<Prisma.PostGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.PostFindManyArgs> | undefined, R>,
    options?: InfiniteRequestOptions<Array<Prisma.PostGetPayload<T>>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.infiniteGet<
        Prisma.SelectSubset<T, Prisma.PostFindManyArgs> | undefined,
        Array<Prisma.PostGetPayload<T>>
    >(`${endpoint}/post/findMany`, getNextArgs, options, fetch);
}

export function useFindUniquePost<T extends Prisma.PostFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>,
    options?: RequestOptions<Prisma.PostGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.PostGetPayload<T>>(`${endpoint}/post/findUnique`, args, options, fetch);
}

export function useFindFirstPost<T extends Prisma.PostFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindFirstArgs>,
    options?: RequestOptions<Prisma.PostGetPayload<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.PostGetPayload<T>>(`${endpoint}/post/findFirst`, args, options, fetch);
}

export function useAggregatePost<T extends Prisma.PostAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.PostAggregateArgs>,
    options?: RequestOptions<Prisma.GetPostAggregateType<T>>,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetPostAggregateType<T>>(`${endpoint}/post/aggregate`, args, options, fetch);
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
    options?: RequestOptions<
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
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
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
    >(`${endpoint}/post/groupBy`, args, options, fetch);
}

export function useCountPost<T extends Prisma.PostCountArgs>(
    args?: Prisma.Subset<T, Prisma.PostCountArgs>,
    options?: RequestOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType>
            : number
    >,
) {
    const { endpoint, fetch } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType>
            : number
    >(`${endpoint}/post/count`, args, options, fetch);
}
