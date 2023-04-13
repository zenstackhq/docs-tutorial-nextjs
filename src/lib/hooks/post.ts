/* eslint-disable */
import type { Prisma, Post } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import { type RequestOptions } from '@zenstackhq/react/runtime/swr';
import * as request from '@zenstackhq/react/runtime/swr';

export function usePost() {
    const { endpoint } = useContext(RequestHandlerContext);
    const prefixesToMutate = [`${endpoint}/post/find`, `${endpoint}/post/aggregate`, `${endpoint}/post/count`, `${endpoint}/post/groupBy`];
    const mutate = request.getMutate(prefixesToMutate);

    async function create<T extends Prisma.PostCreateArgs>(args: Prisma.SelectSubset<T, Prisma.PostCreateArgs>) {
        try {
            return await request.post<Prisma.SelectSubset<T, Prisma.PostCreateArgs>, Prisma.CheckSelect<T, Post, Prisma.PostGetPayload<T>>>(`${endpoint}/post/create`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    function findMany<T extends Prisma.PostFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>, options?: RequestOptions<Array<Prisma.PostGetPayload<T>>>) {
        return request.get<Array<Prisma.PostGetPayload<T>>>(`${endpoint}/post/findMany`, args, options);
    }

    function findUnique<T extends Prisma.PostFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>, options?: RequestOptions<Prisma.PostGetPayload<T>>) {
        return request.get<Prisma.PostGetPayload<T>>(`${endpoint}/post/findUnique`, args, options);
    }

    function findFirst<T extends Prisma.PostFindFirstArgs>(args: Prisma.SelectSubset<T, Prisma.PostFindFirstArgs>, options?: RequestOptions<Prisma.PostGetPayload<T>>) {
        return request.get<Prisma.PostGetPayload<T>>(`${endpoint}/post/findFirst`, args, options);
    }

    async function update<T extends Prisma.PostUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.PostUpdateArgs>) {
        try {
            return await request.put<Prisma.SelectSubset<T, Prisma.PostUpdateArgs>, Prisma.PostGetPayload<T>>(`${endpoint}/post/update`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateMany<T extends Prisma.PostUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>) {
        return await request.put<Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>, Prisma.BatchPayload>(`${endpoint}/post/updateMany`, args, mutate);
    }

    async function upsert<T extends Prisma.PostUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.PostUpsertArgs>) {
        try {
            return await request.post<Prisma.SelectSubset<T, Prisma.PostUpsertArgs>, Prisma.PostGetPayload<T>>(`${endpoint}/post/upsert`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function del<T extends Prisma.PostDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.PostDeleteArgs>) {
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

    async function deleteMany<T extends Prisma.PostDeleteManyArgs>(args?: Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>) {
        return await request.del<Prisma.BatchPayload>(`${endpoint}/post/deleteMany`, args, mutate);
    }

    function aggregate<T extends Prisma.PostAggregateArgs>(args: Prisma.Subset<T, Prisma.PostAggregateArgs>, options?: RequestOptions<Prisma.GetPostAggregateType<T>>) {
        return request.get<Prisma.GetPostAggregateType<T>>(`${endpoint}/post/aggregate`, args, options);
    }

    function groupBy<T extends Prisma.PostGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.PostGroupByArgs['orderBy'] } : { orderBy?: Prisma.PostGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
        }[OrderFields]>(args: Prisma.SubsetIntersection<T, Prisma.PostGroupByArgs, OrderByArg> & InputErrors, options?: RequestOptions<{} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors>) {
        return request.get<{} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors>(`${endpoint}/post/groupBy`, args, options);
    }

    function count<T extends Prisma.PostCountArgs>(args: Prisma.Subset<T, Prisma.PostCountArgs>, options?: RequestOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType> : number>) {
        return request.get<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.PostCountAggregateOutputType> : number>(`${endpoint}/post/count`, args, options);
    }
    return { create, findMany, findUnique, findFirst, update, updateMany, upsert, del, deleteMany, aggregate, groupBy, count };
}
