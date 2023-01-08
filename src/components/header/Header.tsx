import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiSearch } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import imagem from '../../assets/react.png'

export function Header() {
  return (
    <header className='flex items-center justify-between px-12 pt-8'>
      <div className='flex items-center'>
        <button>
          <FiChevronLeft size={22} className="text-white" />
        </button>
        <button>
          <FiChevronRight size={22} className="text-gray-500" />
        </button>

        <label className='relative ml-4 '>
          <button className='absolute bottom-0 left-0 top-0 ml-2'>
            <HiSearch className='text-gray-500 text-xl' />
          </button>
          <input
            type="text"
            placeholder='Search...'
            className='text-gray-400 text-base rounded-2xl outline-none pr-8 pl-8 pt-2 pb-2 bg-transparent border border-gray-500 placeholder:text-[10px] placeholder:text-gray-500'
          />
        </label>
      </div >

      <div className='flex text-white items-center gap-4'>
        <button>
          <CiBellOn size={24} />
        </button>
        <button>
          <AiOutlineMessage size={22} />
        </button>
        <div className='flex items-center'>
          <span className=''>
            <img src={imagem} alt="" className='w-8 h-8 rounded-full' />
          </span>
          <div className='ml-2'>
            <h2 className='text-xs mb-1'>Ramona F</h2>
            <h2 className='text-[12px] text-gray-500'>level 12</h2>
          </div>
        </div>
      </div>
    </header >
  )
}
