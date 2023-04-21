/* eslint-disable */
import type { Prisma, VerificationToken } from "@prisma/client";
import { useContext } from 'react';
import { RequestHandlerContext } from '@zenstackhq/react/runtime';
import { type RequestOptions } from '@zenstackhq/react/runtime/swr';
import * as request from '@zenstackhq/react/runtime/swr';

export function useVerificationToken() {
    const { endpoint } = useContext(RequestHandlerContext);
    const prefixesToMutate = [`${endpoint}/verificationToken/find`, `${endpoint}/verificationToken/aggregate`, `${endpoint}/verificationToken/count`, `${endpoint}/verificationToken/groupBy`];
    const mutate = request.getMutate(prefixesToMutate);

    async function create<T extends Prisma.VerificationTokenCreateArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>) {
        try {
            return await request.post<Prisma.SelectSubset<T, Prisma.VerificationTokenCreateArgs>, Prisma.CheckSelect<T, VerificationToken, Prisma.VerificationTokenGetPayload<T>>>(`${endpoint}/verificationToken/create`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function createMany<T extends Prisma.VerificationTokenCreateManyArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationTokenCreateManyArgs>) {
        return await request.post<Prisma.SelectSubset<T, Prisma.VerificationTokenCreateManyArgs>, Prisma.BatchPayload>(`${endpoint}/verificationToken/createMany`, args, mutate);
    }

    function findMany<T extends Prisma.VerificationTokenFindManyArgs>(args?: Prisma.SelectSubset<T, Prisma.VerificationTokenFindManyArgs>, options?: RequestOptions<Array<Prisma.VerificationTokenGetPayload<T>>>) {
        return request.get<Array<Prisma.VerificationTokenGetPayload<T>>>(`${endpoint}/verificationToken/findMany`, args, options);
    }

    function findUnique<T extends Prisma.VerificationTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationTokenFindUniqueArgs>, options?: RequestOptions<Prisma.VerificationTokenGetPayload<T>>) {
        return request.get<Prisma.VerificationTokenGetPayload<T>>(`${endpoint}/verificationToken/findUnique`, args, options);
    }

    function findFirst<T extends Prisma.VerificationTokenFindFirstArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationTokenFindFirstArgs>, options?: RequestOptions<Prisma.VerificationTokenGetPayload<T>>) {
        return request.get<Prisma.VerificationTokenGetPayload<T>>(`${endpoint}/verificationToken/findFirst`, args, options);
    }

    async function update<T extends Prisma.VerificationTokenUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>) {
        try {
            return await request.put<Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateArgs>, Prisma.VerificationTokenGetPayload<T>>(`${endpoint}/verificationToken/update`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function updateMany<T extends Prisma.VerificationTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>) {
        return await request.put<Prisma.SelectSubset<T, Prisma.VerificationTokenUpdateManyArgs>, Prisma.BatchPayload>(`${endpoint}/verificationToken/updateMany`, args, mutate);
    }

    async function upsert<T extends Prisma.VerificationTokenUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>) {
        try {
            return await request.post<Prisma.SelectSubset<T, Prisma.VerificationTokenUpsertArgs>, Prisma.VerificationTokenGetPayload<T>>(`${endpoint}/verificationToken/upsert`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function del<T extends Prisma.VerificationTokenDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteArgs>) {
        try {
            return await request.del<Prisma.VerificationTokenGetPayload<T>>(`${endpoint}/verificationToken/delete`, args, mutate);
        } catch (err: any) {
            if (err.info?.prisma && err.info?.code === 'P2004' && err.info?.reason === 'RESULT_NOT_READABLE') {
                // unable to readback data
                return undefined;
            } else {
                throw err;
            }
        }
    }

    async function deleteMany<T extends Prisma.VerificationTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, Prisma.VerificationTokenDeleteManyArgs>) {
        return await request.del<Prisma.BatchPayload>(`${endpoint}/verificationToken/deleteMany`, args, mutate);
    }

    function aggregate<T extends Prisma.VerificationTokenAggregateArgs>(args: Prisma.Subset<T, Prisma.VerificationTokenAggregateArgs>, options?: RequestOptions<Prisma.GetVerificationTokenAggregateType<T>>) {
        return request.get<Prisma.GetVerificationTokenAggregateType<T>>(`${endpoint}/verificationToken/aggregate`, args, options);
    }

    function groupBy<T extends Prisma.VerificationTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.VerificationTokenGroupByArgs['orderBy'] } : { orderBy?: Prisma.VerificationTokenGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.TupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
        }[OrderFields]>(args: Prisma.SubsetIntersection<T, Prisma.VerificationTokenGroupByArgs, OrderByArg> & InputErrors, options?: RequestOptions<{} extends InputErrors ? Prisma.GetVerificationTokenGroupByPayload<T> : InputErrors>) {
        return request.get<{} extends InputErrors ? Prisma.GetVerificationTokenGroupByPayload<T> : InputErrors>(`${endpoint}/verificationToken/groupBy`, args, options);
    }

    function count<T extends Prisma.VerificationTokenCountArgs>(args: Prisma.Subset<T, Prisma.VerificationTokenCountArgs>, options?: RequestOptions<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType> : number>) {
        return request.get<T extends { select: any; } ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prisma.VerificationTokenCountAggregateOutputType> : number>(`${endpoint}/verificationToken/count`, args, options);
    }
    return { create, createMany, findMany, findUnique, findFirst, update, updateMany, upsert, del, deleteMany, aggregate, groupBy, count };
}
