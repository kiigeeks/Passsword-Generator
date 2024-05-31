import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import CopyIcon from '../../assets/copy.svg'
import { copyClipboard } from '../../utils/helper';

const CardLogs = ({ data }) => {
    const handleCopy = () => {
		copyClipboard(data.password)
	}

    return (
        <div className="px-3 md:px-5 py-5 flex flex-col gap-2 w-full bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 rounded-2xl border border-gray-600 shadow-lg shadow-gray-800">
            <div className="flex flex-row gap-5 items-start">
                <p className="text-xxs/relaxed md:text-xs/relaxed flex-1 font-semibold text-clip overflow-hidden break-all">
                    {data.password}
                </p>
                <div className="tooltip-container relative">
					<button onClick={() => handleCopy()} className="h-7 w-7 p-1.5 bg-whitePrimary rounded-md cursor-pointer">
						<img src={CopyIcon} alt="copy" className="w-full h-full object-contain" />
					</button>
					<span className="tooltip-text z-50 absolute bg-gray-800 text-white text-xxs rounded py-1 px-3 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
						Copy
					</span>
				</div>
            </div>
            <small className="text-xxs md:text-xs text-start text-gray-300 italic font-light tracking-wider"><ReactTimeAgo date={Date.parse(data.time)} /></small>
        </div>
    )
}

CardLogs.propTypes = {
    data: PropTypes.object,
}

export default CardLogs