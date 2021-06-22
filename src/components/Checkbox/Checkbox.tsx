import { FC } from "react";
import tw, { styled } from "twin.macro";

interface CheckboxProps {
    selected: boolean;
    onClick: () => void;
}

const StyledCheckbox = styled.input(({ checked }) => [
    tw`appearance-none border border-gray-400 bg-white h-4 w-4 p-1 rounded`,
    !checked && tw`hover:border-blue-300 hover:border-2 transition-colors`,
    checked && tw`bg-blue-300 border-blue-500 border-2`,
]);

const Checkbox: FC<CheckboxProps> = ({ selected = false, onClick }) => {
    return (
        <>
            <StyledCheckbox type="checkbox" checked={selected} onClick={onClick} />
            {selected && (
                <div tw="z-50 -ml-10 w-6 h-6 rounded" onClick={onClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        aria-labelledby="title"
                        aria-describedby="desc"
                        role="img">
                        <title>Checkbox</title>
                        <desc>Selection checkbox for the current row</desc>
                        <path
                            data-name="layer1"
                            d="M28 48L14.879 34.121a3 3 0 0 1 4.242-4.243L28 39l18.83-20.072a3 3 0 0 1 4.34 4.143z"
                            fill="#FFFFFF"></path>
                        <path
                            data-name="stroke"
                            d="M28 48L14.879 34.121a3 3 0 0 1 4.242-4.243L28 39l18.83-20.072a3 3 0 0 1 4.34 4.143z"
                            fill="none"
                            stroke="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"></path>
                    </svg>
                </div>
            )}
        </>
    );
};

export default Checkbox;
