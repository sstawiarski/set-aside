import { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { IoWalletOutline, IoAddCircleOutline, IoSettingsOutline } from "react-icons/io5";
import TapBarItem from '../TabBarItem/TapBarItem';

const StyledBar = styled.div(() => [
    tw`flex flex-row justify-around bg-green-500 pb-10 -mb-10 pt-5 text-white`
])

const TapBar: FC = () => {
    return (
        <StyledBar>
            <TapBarItem label="Accounts">
                <IoWalletOutline tw="fill-current w-7 h-7" />
            </TapBarItem>

            <TapBarItem label="Transactions">
                <IoAddCircleOutline tw="fill-current w-7 h-7" />
            </TapBarItem>

            <TapBarItem label="Settings">
                <IoSettingsOutline tw="fill-current w-7 h-7" />
            </TapBarItem>
        </StyledBar>
    )
};

export default TapBar;