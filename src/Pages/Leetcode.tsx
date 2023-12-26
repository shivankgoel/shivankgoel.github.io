import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Highlight,
    Link,
    Stack, Tab, TabList, TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr, chakra,
} from "@chakra-ui/react";
import { Nav } from "../Components/Nav";
import { easy_questions, hard_questions, medium_questions } from "../Files/leetcode_questions";

import {
    createColumnHelper,
    useReactTable,
    getCoreRowModel,
    ColumnDef,
    flexRender,
    SortingFn,
    sortingFns,
    getSortedRowModel,
    SortingState,
} from "@tanstack/react-table";

import {
    RankingInfo,
    rankItem,
    compareItems,
} from '@tanstack/match-sorter-utils';

import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

interface Question {
    difficulty: string;
    topic: string;
    questionName: string;
    questionLink: string;
    videoLink: string;
}

const columnHelper = createColumnHelper<Question>();

export const Leetcode = (): JSX.Element => {

    const [easyList, setEasyList] = useState<Question[]>([]);
    const [mediumList, setMediumList] = useState<Question[]>([]);
    const [hardList, setHardList] = useState<Question[]>([]);
    const [data, setData] = useState<Question[]>([]);
    const [sorting, setSorting] = useState<SortingState>([]);

    const parse_questions = (difficulty: string, questions_list: string[]): Question[] => {
        return questions_list.map((item, index) => {
            const question = item.split(',');
            const topic = question[0].trim();
            const questionLink = question[1].trim();
            const questionName = questionLink.split('/').at(-2) || "";
            const videoLink = question[2].trim();
            return {
                difficulty: difficulty,
                topic: topic,
                questionName: questionName,
                questionLink: questionLink,
                videoLink: videoLink
            };
        });
    };

    useEffect(() => {
        const easy_rows: Question[] = parse_questions("Easy", easy_questions.split("\n").filter(Boolean));
        const medium_rows: Question[] = parse_questions("Medium", medium_questions.split("\n").filter(Boolean));
        const hard_rows: Question[] = parse_questions("Hard", hard_questions.split("\n").filter(Boolean));
        setEasyList(easy_rows);
        setMediumList(medium_rows);
        setHardList(hard_rows);
        setData(easy_rows);
    }, []);

    const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
        let dir = 0
        return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
    }

    const getBackground = (difficulty: string) => {
        if (difficulty === "Easy") {
            return 'green.200';
        }
        if (difficulty === "Medium") {
            return 'yellow.200';
        }
        return 'red.200';
    }

    const columns: ColumnDef<Question, string>[] = [
        columnHelper.display({
            header: "SNo.",
            cell: info => info.row.index + 1,
        }),
        columnHelper.accessor('difficulty', {
            header: "Difficulty",
            cell: info =>
                <Highlight query={['Easy', 'Medium', 'Hard']} styles={{ px: '2', py: '1', rounded: 'full', bg: getBackground(info.getValue()) }}>
                    {info.getValue()}
                </Highlight >,
            sortingFn: `alphanumeric`,
        }),
        columnHelper.accessor("topic", {
            header: "Topic",
            cell: info => info.getValue(),
            sortingFn: `alphanumeric`,
        }),
        columnHelper.accessor(item => item.questionLink, {
            header: "Question",
            cell: info => <Link href={info.getValue()} isExternal={true}>{info.getValue().split('/').at(-2) || ""}</Link>,
        }),
        columnHelper.accessor('videoLink', {
            header: 'Solution',
            cell: info => <Link href={info.getValue()} isExternal={true}>Video Solution</Link>
        }),
    ];

    const table = useReactTable<Question>({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
        onSortingChange: setSorting,
    });

    return (
        <Stack>
            <Nav />
            <Stack p={16} spacing={3} fontSize={"xl"}>
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab fontSize={"xl"} onClick={() => setData(easyList)} defaultChecked>Easy</Tab>
                        <Tab fontSize={"xl"} onClick={() => setData(mediumList)}>Medium</Tab>
                        <Tab fontSize={"xl"} onClick={() => setData(hardList)}>Hard</Tab>
                        <Tab fontSize={"xl"} onClick={() => setData([...easyList, ...mediumList, ...hardList])}>All</Tab>
                    </TabList>
                </Tabs>
                <TableContainer>
                    <Table>
                        <Thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <Tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                                        const meta: any = header.column.columnDef.meta;
                                        return (
                                            <Th
                                                fontSize={"xl"}
                                                key={header.id}
                                                onClick={() => header.column.toggleSorting()}
                                                isNumeric={meta?.isNumeric}
                                            >
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                                <chakra.span pl="4">
                                                    {header.column.getIsSorted() ? (
                                                        header.column.getIsSorted() === "desc" ? (
                                                            <TriangleDownIcon aria-label="sorted descending" />
                                                        ) : (
                                                            <TriangleUpIcon aria-label="sorted ascending" />
                                                        )
                                                    ) : null}
                                                </chakra.span>
                                            </Th>
                                        );
                                    })}
                                </Tr>
                            ))}
                        </Thead>
                        <Tbody>
                            {table.getRowModel().rows.map((row) => (
                                <Tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                        // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                                        const meta: any = cell.column.columnDef.meta;
                                        return (
                                            <Td key={cell.id} isNumeric={meta?.isNumeric}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </Td>
                                        );
                                    })}
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </Stack >
    )
};