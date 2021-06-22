import "./App.css";
import tw from "twin.macro";
import Subcategory from "./components/Subcategory/Subcategory";
import Category from "./components/Category/Category";
import Toggle from "./components/Toggle/Toggle";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { toggleCollapse } from "./redux/uiSlice";
import { moveMoney } from "./redux/moneySlice";
import { Menu, Transition } from "@headlessui/react";
import { useMediaQuery } from './hooks';
import TapBar from "./components/TapBar/TapBar";

function App() {
    const dispatch = useAppDispatch();
    const collapseRows = useAppSelector((state) => state.ui.collapsed);
    const moneyToBudget = useAppSelector((state) => state.money.toBeBudgeted);
    const isSmall = useMediaQuery('(max-width: 600px)');

    return (
        <div className="App">
            <div>
                <span>{moneyToBudget}</span>
            </div>
            <div tw="flex flex-col">
                <button onClick={() => dispatch(moveMoney({ value: 5, source: "test", destination: "toBeBudgeted" }))}>
                    Add $5 to Budget
                </button>
                <button onClick={() => dispatch(moveMoney({ value: 5, source: "toBeBudgeted", destination: "1" }))}>
                    Add $5 to ID 1
                </button>
                <button onClick={() => dispatch(moveMoney({ value: 5, source: "toBeBudgeted", destination: "2" }))}>
                    Add $5 to ID 2
                </button>
            </div>

            <Menu as="div">
                <Menu.Button tw="absolute right-2 top-5 text-black hover:text-purple-900 focus:outline-none hover:bg-purple-200 px-2 py-1 rounded-md transition-colors cursor-pointer">
                    UI Settings
                </Menu.Button>
                <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items tw="absolute right-2 p-5 top-12 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            <Toggle
                                selected={collapseRows}
                                label="Collapse rows"
                                onToggle={() => dispatch(toggleCollapse())}
                            />
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
            <div tw="w-3/4 float-right mt-24">
                <Category title="Expenses">
                    <Subcategory name="Fees" id="1" />
                    <Subcategory name="Interest" id="2" />
                </Category>
            </div>
            <div tw="fixed bottom-10 w-full">
                {isSmall ? <TapBar /> : <span>large</span>}
            </div>
        </div>
    );
}

export default App;
