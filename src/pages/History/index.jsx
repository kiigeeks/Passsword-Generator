import PropTypes from 'prop-types';
import CardLogs from '../../components/Cards/CardLogs'
import { useDispatch, useSelector } from 'react-redux';
import { clearPasswordLogs, selectPasswordLogs } from '../../features/password/passwordSlice';

const HistoryLogs = ({ setShowHistory }) => {
    const dispatch = useDispatch();
    const passwordLists = useSelector(selectPasswordLogs);
    
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-10 flex flex-col gap-8 items-center">
			<h1 className="text-2xl font-extrabold sm:text-5xl">
				Password History
			</h1>

			<div className=" flex flex-row gap-5 justify-center items-center">
				<button onClick={() => dispatch(clearPasswordLogs())} className="group w-fit relative inline-block text-xs md:text-sm font-medium focus:outline-none focus:ring-0">
					<span className="absolute inset-0 border border-red-500 group-active:border-red-400 rounded-md"></span>
					<span
                        className="block border border-red-500 bg-red-500 px-7 py-2.5 rounded-md transition-transform active:border-red-400 active:bg-red-400 group-hover:-translate-x-1 group-hover:-translate-y-1"
					>
                        Reset
					</span>
				</button>
				<button onClick={() => setShowHistory(false)} className="group w-fit relative inline-block text-xs md:text-sm font-medium focus:outline-none focus:ring-0">
					<span className="absolute inset-0 border border-gray-500 group-active:border-gray-400 rounded-md"></span>
					<span
                        className="block border border-gray-500 bg-gray-500 px-7 py-2.5 rounded-md transition-transform active:border-gray-400 active:bg-gray-400 group-hover:-translate-x-1 group-hover:-translate-y-1"
					>
                        Back
					</span>
				</button>
			</div>

            {passwordLists.length === 0
                ?
                    <span className='mt-10 text-center italic text-gray-300 tracking-wider text-sm md:text-base'>History Not Found</span>
                :
                    <div className="mx-auto pt-5 max-w-xl w-full flex flex-col gap-7 mt-5 h-[60vh] overflow-scroll">
                        {passwordLists.map((item) => (
                            <CardLogs data={item} key={item.id} />
                        ))}
                    </div>
            }
        </section>
    )
}

HistoryLogs.propTypes = {
    setShowHistory: PropTypes.func,
}

export default HistoryLogs