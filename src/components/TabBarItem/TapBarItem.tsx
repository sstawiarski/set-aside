import { FC } from 'react';
import tw from 'twin.macro';

interface TapBarItemProps {
    label?: string;
    onPress?: () => void;
}

const Column = tw.div`
    flex
    flex-col
    items-center
`

const TapBarItem: FC<TapBarItemProps> = ({ label, children, onPress }) => {
    return (
        <Column role="button" onClick={() => {
            onPress && onPress();
            }}>
            {children}
            {label && <span tw="text-current">{label}</span>}
        </Column>
    );
};

export default TapBarItem;