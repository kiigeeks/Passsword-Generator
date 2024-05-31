import { useState } from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux"
import CopyIcon from '../../assets/copy.svg'
import { copyClipboard, generatePassword } from '../../utils/helper';
import { addPassword } from '../../features/password/passwordSlice';

const Home = ({ setShowHistory }) => {
    const dispatch = useDispatch();
	const [lengthInput, setLengthInput] = useState(6)
    const [includeLower, setIncludeLower] = useState(true);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeNumeric, setIncludeNumeric] = useState(true);
    const [includeSymbol, setIncludeSymbol] = useState(true);
	const [password, setPassword] = useState("")

	const handleGenerate = () => {
		const result = generatePassword(lengthInput, includeLower, includeUpper, includeNumeric, includeSymbol)
		setPassword(result)

		const passwordData = {
			password: result,
		}
		dispatch(addPassword(passwordData))
	}

	const handleCopy = () => {
		copyClipboard(password)
	}

    return (
        <section className="mx-auto max-w-screen-xl px-4 py-10 md:py-14 lg:py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 px-4 md:px-5 py-10 rounded-2xl border border-gray-600 shadow-lg shadow-gray-800">
                <h1 className="text-2xl font-extrabold sm:text-5xl">
                  Password Generator
                </h1>
          
                <p className="mt-4 text-xxs/relaxed md:text-xs/relaxed">
                    A tool that allows you to easily create strong and unique passwords tailored to your needs, ensuring maximum security in seconds.
                </p>

				<div className="mt-10 px-0 md:px-5 flex flex-col items-start">
					<label htmlFor="password-length" className="block text-xs md:text-sm tracking-wider font-medium "> Password Length </label>
					<input
						type="number"
						value={lengthInput}
						onChange={(e) => setLengthInput(e.target.value)}
						id="password-length"
						placeholder="6"
						className="mt-1 w-full rounded-md border-gray-200 shadow-sm text-xs md:text-sm size-7 px-2 text-gray-800"
					/>
				</div>

                <div className="mt-4 px-3 md:px-5 flex flex-row flex-wrap gap-3 justify-center items-center text-xs md:text-sm tracking-wider">
                    <label htmlFor="Option1" className="flex cursor-pointer items-center gap-2 flex-1">
						<div className="flex items-center">
							<input
								type="checkbox" 
								checked={includeUpper} 
								onChange={(e) => setIncludeUpper(e.target.checked)}
								className="size-4 rounded border-gray-300"
								id="Option1"
								name="Option1" />
						</div>
					
						<div>
							<strong className="font-medium"> Uppercase </strong>
						</div>
                    </label>
                
                    <label htmlFor="Option2" className="flex cursor-pointer items-center gap-2 flex-1">
						<div className="flex items-center">
							<input
								type="checkbox"
								checked={includeLower} 
								onChange={(e) => setIncludeLower(e.target.checked)}
								className="size-4 rounded border-gray-300"
								id="Option2"
								name="Option2" />
						</div>
					
						<div>
							<strong className="font-medium"> Lowercase </strong>
						</div>
                    </label>
                
                    <label htmlFor="Option3" className="flex cursor-pointer items-center gap-2 flex-1">
						<div className="flex items-center">
							<input
								type="checkbox" 
								checked={includeNumeric} 
								onChange={(e) => setIncludeNumeric(e.target.checked)}
								className="size-4 rounded border-gray-300" 
								id="Option3"
								name="Option3" />
						</div>
					
						<div>
							<strong className="font-medium"> Numeric </strong>
						</div>
                    </label>

                    <label htmlFor="Option4" className="flex cursor-pointer items-center gap-2 flex-1">
						<div className="flex items-center">
							<input
								type="checkbox" 
								checked={includeSymbol} 
								onChange={(e) => setIncludeSymbol(e.target.checked)}
								className="size-4 rounded border-gray-300"
								id="Option4"
								name="Option4" />
						</div>
					
						<div>
							<strong className="font-medium"> Symbol </strong>
						</div>
                    </label>
                </div>

				<div className="mt-8 flex flex-col gap-2 justify-center items-center">
					<button onClick={() => handleGenerate()} className="group w-fit relative inline-block text-xs md:text-sm font-medium focus:outline-none focus:ring-0">
						<span className="absolute inset-0 border border-blue-500 group-active:border-blue-400 rounded-md"></span>
						<span
							className="block border border-blue-500 bg-blue-500 px-7 py-2.5 rounded-md transition-transform active:border-blue-400 active:bg-blue-400 group-hover:-translate-x-1 group-hover:-translate-y-1"
						> 
							Generate Password
						</span>
					</button>
					<button onClick={() => setShowHistory(true)} className="text-xs tracking-wide text-blue-500 underline underline-offset-4 italic">
						Password History
					</button>
				</div>

				<div className="mt-12 px-0 md:px-5 flex flex-col items-start gap-1">
					<label htmlFor="password" className="block text-xs md:text-sm tracking-wider font-medium "> Password </label>
					<div className="flex flex-row gap-5 justify-between items-center w-full">
						<input
							type="text"
							value={password}
							id="password"
							readOnly
							className="w-full rounded-md border-gray-200 shadow-sm text-xs md:text-sm size-7 px-2 text-gray-800 bg-gray-300"
						/>
						<div className="tooltip-container relative">
							<button onClick={() => handleCopy()} className="h-7 w-7 p-1.5 bg-whitePrimary rounded-md cursor-pointer">
								<img src={CopyIcon} alt="copy" className="w-full h-full object-contain" />
							</button>
							<span className="tooltip-text absolute bg-gray-800 text-white text-xxs rounded py-1 px-3 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
								Copy
							</span>
						</div>
					</div>
				</div>
            </div>
        </section>
    )
}

Home.propTypes = {
    setShowHistory: PropTypes.func,
}

export default Home