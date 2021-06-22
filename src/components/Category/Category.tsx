import { FC, useState } from "react";
import { useAppSelector } from '../../redux/hooks';
import tw, { styled } from "twin.macro";

interface CategoryProps {
    title: string;
}

const CategoryParent = tw.div`
flex
flex-col`;

const RowHeader = styled.div<{ collapsed?: boolean }>(({ collapsed = false }) => [
    tw`bg-blue-100
    text-gray-900
    flex
    justify-start
    px-4
    py-2
    items-center
    rounded
    gap-6`,
    collapsed && tw`py-0`
]);

const Category: FC<CategoryProps> = ({ title, children }) => {
    const [open, setOpen] = useState<boolean>(true);
    const isCollapsed = useAppSelector((state) => state.ui.collapsed);

    return (
        <CategoryParent>
            <RowHeader collapsed={isCollapsed}>
                {!open ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        tw="w-4 h-4 cursor-pointer"
                        onClick={() => setOpen(true)}
                        viewBox="0 0 350 350">
                        <defs></defs>
                        <g
                            id="icon"
                            css="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                            transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)">
                            <path
                                d="M 58.33 58.799 L 15.998 16.466 c -1.059 -1.059 -1.059 -2.776 0 -3.835 L 27.834 0.794 c 1.059 -1.059 2.776 -1.059 3.835 0 l 42.333 42.333 c 1.059 1.059 1.059 2.776 0 3.835 L 62.166 58.799 C 61.107 59.858 59.39 59.858 58.33 58.799 z"
                                css="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                            />
                            <path
                                d="M 58.33 31.201 L 15.998 73.534 c -1.059 1.059 -1.059 2.776 0 3.835 l 11.837 11.837 c 1.059 1.059 2.776 1.059 3.835 0 l 42.333 -42.333 c 1.059 -1.059 1.059 -2.776 0 -3.835 L 62.166 31.201 C 61.107 30.142 59.39 30.142 58.33 31.201 z"
                                css="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                            />
                        </g>
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        tw="w-4 h-4 cursor-pointer"
                        version="1.1"
                        viewBox="0 0 350 350"
                        onClick={() => setOpen(false)}>
                        <defs></defs>
                        <g
                            id="icon"
                            css="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                            transform="translate(-1.9444444444444287 -1.9444444444444287) scale(3.89 3.89)">
                            <path
                                d="M 58.799 58.33 L 16.466 15.998 c -1.059 -1.059 -2.776 -1.059 -3.835 0 L 0.794 27.834 c -1.059 1.059 -1.059 2.776 0 3.835 l 42.333 42.333 c 1.059 1.059 2.776 1.059 3.835 0 l 11.837 -11.837 C 59.858 61.107 59.858 59.39 58.799 58.33 z"
                                css="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                            />
                            <path
                                d="M 31.201 58.33 l 42.333 -42.333 c 1.059 -1.059 2.776 -1.059 3.835 0 l 11.837 11.837 c 1.059 1.059 1.059 2.776 0 3.835 L 46.873 74.002 c -1.059 1.059 -2.776 1.059 -3.835 0 L 31.201 62.166 C 30.142 61.107 30.142 59.39 31.201 58.33 z"
                                css="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                            />
                        </g>
                    </svg>
                )}
                <span>{title}</span>
            </RowHeader>
            {open && children}
        </CategoryParent>
    );
};

export default Category;
