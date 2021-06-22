import { FC } from "react";
import tw, { styled } from "twin.macro";
import { Switch } from "@headlessui/react";

interface ToggleProps {
    label?: string;
    onToggle: () => void;
    selected: boolean;
}

const StyledToggle = styled(Switch)(({ checked }) => [
    tw`bg-gray-200 w-12 h-6 rounded-full focus:outline-none`,
    checked && tw`bg-green-500`,
]);

const ToggleContainer = tw.div`
    flex
    flex-row
    gap-2
`;

const Selector = styled.div<{ enabled: boolean }>(({ enabled }) => [
    tw`
    w-5
    h-5
    rounded-full
    ml-0.5
    bg-white
    transition-all
    `,
    enabled && tw`transform translate-x-6 transition-transform`,
]);

const Toggle: FC<ToggleProps> = ({ selected, label, onToggle }) => {
    return (
        <Switch.Group>
            <ToggleContainer>
                <StyledToggle
                    checked={selected}
                    onChange={() => {
                        onToggle();
                    }}>
                    <span tw="hidden">Toggle table collapse view</span>
                    <Selector enabled={selected} />
                </StyledToggle>
                {label && <Switch.Label>{label}</Switch.Label>}
            </ToggleContainer>
        </Switch.Group>
    );
};

export default Toggle;
