type SwitchProps = { checked: boolean, onChange: () => void };

export const Switch = (props: SwitchProps) => <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" checked={props.checked} onChange={props.onChange}/>
    <div
        className="w-11 h-6 bg-[#1F252E] rounded-full peer peer-focus:ring-4 peer-focus:ring-[#BD091C] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#BD091C]"></div>
    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Computer plays as O?</span>
</label>;