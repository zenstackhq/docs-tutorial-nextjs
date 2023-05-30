/* eslint-disable */
import type { Prisma, Post } from '@prisma/client';
import { useContext } from 'react';
import { RequestHandlerContext, type RequestOptions } from './_helper';
import * as request from './_helper';

export function useMutatePost() {
    const { endpoint } = useContext(RequestHandlerContext);
    const prefixesToMutate = [
        `${endpoint}/post/find`,
        `${endpoint}/post/aggregate`,
        `${endpoint}/post/count`,
        `${endpoint}/post/groupBy`,
    ];
    const mutate = request.getMutate(prefixesToMutate);

    async function createPost<T extends Prisma.PostCreateArgs>(args: Prisma.SelectSubset<T, Prisma.PostCreateArgs>) {
        try {
            return await request.post<Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>>(
                `${endpoint}/post/create`,
                args,
                mutate,
            );
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updatePost<T extends Prisma.PostUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>) {
        try {
            return await request.put<Prisma.PostGetPayload<T>>(`${endpoint}/post/update`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateManyPost<T extends Prisma.PostUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>,
    ) {
        try {
            return await request.put<Prisma.BatchPayload>(`${endpoint}/post/updateMany`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function upsertPost<T extends Prisma.PostUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.PostUpsertArgs>) {
        try {
            return await request.post<Prisma.PostGetPayload<T>>(`${endpoint}/post/upsert`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deletePost<T extends Prisma.PostDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.PostDeleteArgs>) {
        try {
            return await request.del<Prisma.PostGetPayload<T>>(`${endpoint}/post/delete`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deleteManyPost<T extends Prisma.PostDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>,
    ) {
        try {
            return await request.del<Prisma.BatchPayload>(`${endpoint}/post/deleteMany`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }
    return { createPost, updatePost, updateManyPost, upsertPost, deletePost, deleteManyPost };
}

export function useFindManyPost<T extends Prisma.PostFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>,
    options?: RequestOptions<Array<Prisma.PostGetPayload<T>>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Array<Prisma.PostGetPayload<T>>>(`${endpoint}/post/findMany`, args, options);
}

export function useFindUniquePost<T extends Prisma.PostFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>,
    options?: RequestOptions<Prisma.PostGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.PostGetPayload<T>>(`${endpoint}/post/findMany`, args, options);
}

export function useFindFirstPost<T extends Prisma.PostFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.PostFindFirstArgs>,
    options?: RequestOptions<Prisma.PostGetPayload<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.PostGetPayload<T>>(`${endpoint}/post/findMany`, args, options);
}

export function useAggregatePost<T extends Prisma.PostAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.PostAggregateArgs>,
    options?: RequestOptions<Prisma.GetPostAggregateType<T>>,
) {
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<Prisma.GetPostAggregateType<T>>(`${endpoint}/post/findMany`, args, options);
}

export function useGroupByPost<
    T extends Prisma.PostGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PostGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.PostGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.TupleToUnion<T['by']>,
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
                  Prisma.PickArray<Prisma.PostGroupByOutputType, T['by']> & {
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
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<
        {} extends InputErrors
            ? Array<
                  Prisma.PickArray<Prisma.PostGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.PostGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.PostGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.PostGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >(`${endpoint}/post/findMany`, args, options);
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
    const { endpoint } = useContext(RequestHandlerContext);
    return request.get<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType>
            : number
    >(`${endpoint}/post/findMany`, args, options);
}
