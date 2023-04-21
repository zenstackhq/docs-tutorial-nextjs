/* eslint-disable */
import type { Prisma, Session } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import { type RequestOptions } from '@zenstackhq/react/runtime/swr';
import * as request from '@zenstackhq/react/runtime/swr';

export function useSession() {
    const { endpoint } = useContext(RequestHandlerContext);
    const prefixesToMutate = [`${endpoint}/session/find`, `${endpoint}/session/aggregate`, `${endpoint}/session/count`, `${endpoint}/session/groupBy`];
    const mutate = request.getMutate(prefixesToMutate);

    async function create<T extends Prisma.SessionCreateArgs>(args: Prisma.SelectSubset<T, Prisma.SessionCreateArgs>) {
        try {
            return await request.post<Prisma.SelectSubset<T, Prisma.SessionCreateArgs>, Prisma.CheckSelect<T, Session, Prisma.SessionGetPayload<T>>>(`${endpoint}/session/create`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function createMany<T extends Prisma.SessionCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.SessionCreateManyArgs>) {
        return await request.post<Prisma.SelectSubset<T, Prisma.SessionCreateManyArgs>, Prisma.BatchPayload>(`${endpoint}/session/createMany`, args, mutate);
    }

    function findMany<T extends Prisma.SessionFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.SessionFindManyArgs>, options?: RequestOptions<Array<Prisma.SessionGetPayload<T>>>) {
        return request.get<Array<Prisma.SessionGetPayload<T>>>(`${endpoint}/session/findMany`, args, options);
    }

    function findUnique<T extends Prisma.SessionFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.SessionFindUniqueArgs>, options?: RequestOptions<Prisma.SessionGetPayload<T>>) {
        return request.get<Prisma.SessionGetPayload<T>>(`${endpoint}/session/findUnique`, args, options);
    }

    function findFirst<T extends Prisma.SessionFindFirstArgs>(args: Prisma.SelectSubset<T, Prisma.SessionFindFirstArgs>, options?: RequestOptions<Prisma.SessionGetPayload<T>>) {
        return request.get<Prisma.SessionGetPayload<T>>(`${endpoint}/session/findFirst`, args, options);
    }

    async function update<T extends Prisma.SessionUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>) {
        try {
            return await request.put<Prisma.SelectSubset<T, Prisma.SessionUpdateArgs>, Prisma.SessionGetPayload<T>>(`${endpoint}/session/update`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateMany<T extends Prisma.SessionUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.SessionUpdateManyArgs>) {
        return await request.put<Prisma.SelectSubset<T, Prisma.SessionUpdateManyArgs>, Prisma.BatchPayload>(`${endpoint}/session/updateMany`, args, mutate);
    }

    async function upsert<T extends Prisma.SessionUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.SessionUpsertArgs>) {
        try {
            return await request.post<Prisma.SelectSubset<T, Prisma.SessionUpsertArgs>, Prisma.SessionGetPayload<T>>(`${endpoint}/session/upsert`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function del<T extends Prisma.SessionDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.SessionDeleteArgs>) {
        try {
            return await request.del<Prisma.SessionGetPayload<T>>(`${endpoint}/session/delete`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deleteMany<T extends Prisma.SessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, Prisma.SessionDeleteManyArgs>) {
        return await request.del<Prisma.BatchPayload>(`${endpoint}/session/deleteMany`, args, mutate);
    }

    function aggregate<T extends Prisma.SessionAggregateArgs>(args: Prisma.Subset<T, Prisma.SessionAggregateArgs>, options?: RequestOptions<Prisma.GetSessionAggregateType<T>>) {
        return request.get<Prisma.GetSessionAggregateType<T>>(`${endpoint}/session/aggregate`, args, options);
    }

    function groupBy<T extends Prisma.SessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.SessionGroupByArgs['orderBy'] } : { orderBy?: Prisma.SessionGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
        }[OrderFields]>(args: Prisma.SubsetIntersection<T, Prisma.SessionGroupByArgs, OrderByArg> & InputErrors, options?: RequestOptions<{} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors>) {
        return request.get<{} extends InputErrors ? Prisma.GetSessionGroupByPayload<T> : InputErrors>(`${endpoint}/session/groupBy`, args, options);
    }

    function count<T extends Prisma.SessionCountArgs>(args: Prisma.Subset<T, Prisma.SessionCountArgs>, options?: RequestOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType> : number>) {
        return request.get<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.SessionCountAggregateOutputType> : number>(`${endpoint}/session/count`, args, options);
    }
    return { create, createMany, findMany, findUnique, findFirst, update, updateMany, upsert, del, deleteMany, aggregate, groupBy, count };
}
