import React from 'react'

export default function MainProduct() {
  return (
    <div className='container bg-[#E7F5FD] h-screen pl-96 pt-10'>
        <h5 className='text-4xl font-semibold'>Add New Product</h5>
        <div className='grid grid-cols-12 gap-4'>
            <form className='mt-10 col-span-9'>
                {/* <!--Name input--> */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <label
                        for="exampleInput7"
                        className="text-[#3B97CB]"
                        >Product Name
                    </label>
                    <input
                        type="text"
                        className="bg-white peer block min-h-[auto] w-full rounded-lg border border-[#3B97CB] bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput7"
                        placeholder="" />
                    </div>

                    {/* <!--Message textarea--> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <label
                            for="exampleInput7"
                            className="text-[#3B97CB]"
                            >Description
                        </label>
                        <textarea
                            className="bg-white peer block min-h-[auto] w-full rounded-lg border-1 border border-[#3B97CB] bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Message">
                        </textarea>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        {/* <!--First name input--> */}
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <label
                                for="exampleInput7"
                                className="text-[#3B97CB]"
                                >Product Name
                            </label>
                            <input
                            type="text"
                            class="peer block min-h-[auto] w-full bg-white border border-[#3B97CB] rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput123"
                            aria-describedby="emailHelp123"
                            placeholder="First name" />
                        </div>

                        {/* <!--Last name input--> */}
                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <label
                                for="exampleInput124"
                                class="text-[#3B97CB]"
                                >Last name
                            </label>
                            <input
                            type="text"
                            class="peer block min-h-[auto] w-full bg-white border border-[#3B97CB] rounded-lg bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput124"
                            aria-describedby="emailHelp124"
                            placeholder="Last name" />
                            
                        </div>
                    </div>

                    {/* <!--Submit button--> */}
                    <button
                    type="submit"
                    className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Send
                    </button>
            </form>

            <div className='col-span-3 bg-white h-screen'>
                These the other contents.
            </div>
        </div>
    </div>
  )
}
