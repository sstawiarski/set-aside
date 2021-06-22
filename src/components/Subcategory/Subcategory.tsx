import { FC, useState } from "react";
import tw, { styled } from "twin.macro";
import Checkbox from "../Checkbox/Checkbox";
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

interface SubcategoryProps {
    collapsed?: boolean;
    selected?: boolean;
}

const StyledRow = styled.div<SubcategoryProps>(({ collapsed = false, selected = false }) => [
    tw`flex border-gray-400 border-b hover:bg-gray-200 transition-colors items-center justify-evenly gap-5`,
    selected && tw`bg-gray-200`,
    !collapsed && tw`px-4 py-2`,
    collapsed && tw`py-0 px-4`,
]);

const StyledLabel = styled.span<{ selected: boolean }>(({ selected }) => [
    tw`ml-0`,
    selected && tw`-ml-1`
])

const Subcategory: FC<{ id: string, name: string }> = ({ id, name }) => {
    const [selected, setSelected] = useState<boolean>(false);
    const collapsed = useAppSelector((state) => state.ui.collapsed);
    const currentBudgeted = useAppSelector((state) => state.money[id] || 0);

    return (
        <StyledRow selected={selected} collapsed={collapsed}>
            <Checkbox selected={selected} onClick={() => setSelected(!selected)} />
            <StyledLabel selected={selected}>{name}</StyledLabel>
            <span css="margin-left: auto; margin-right: 1rem;">{currentBudgeted}</span>
        </StyledRow>
    );
};

export default Subcategory;
