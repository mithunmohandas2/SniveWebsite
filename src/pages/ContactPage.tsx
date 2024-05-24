import { useState } from "react";


function ContactPage() {

    const [name, setName] = useState("");
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const [budget, setBudget] = useState('');
    const [reference, setReference] = useState('');
    const [files, setFiles] = useState<null | FileList>(null);

    function handleContactFormHelper(e: { preventDefault: () => void; }): void {
        e.preventDefault()
        setEmail((email).toLowerCase().trimEnd()) //email to lowercase by default
        console.log(name, company, phone, email, projectDetails, budget, reference, files)
    }



    return (
        <div className="mx-8 sm:mx-20">
            <h1>Let’s get <span className="text-violetTxt">started</span></h1>

            <form className="" onSubmit={handleContactFormHelper}>

                <div className='flex flex-col sm:flex-row sm:space-x-8 mx-auto'>

                    <div className="mb-4 sm:w-3/5">
                        <label htmlFor="name" className="text-base font-medium">What is your name? <span className="text-red-600">*</span></label>
                        <input id="name" type="name" required className="block w-full ps-2 border py-3 rounded-md my-3  placeholder:text-gray-400 sm:text-sm" placeholder="Your name here" pattern="[A-Za-z ]*" minLength={3} value={name} onChange={(input) => { setName(input.target.value.trimStart()) }} />
                    </div>


                    <div className="mb-4 sm:w-3/5">
                        <label htmlFor="company" className="text-base font-medium">Name of your company/organisation? <span className="text-red-600">*</span></label>
                        <input id="company" type="name" required className="block w-full ps-2 border py-3 rounded-md my-3  placeholder:text-gray-400 sm:text-sm" placeholder="Widgets, Pvt Lmt" pattern="[A-Za-z ]*" value={company}
                            onChange={(input) => setCompany(input.target.value.trimStart())} />
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:space-x-8 mx-auto'>

                    <div className="mb-4 sm:w-3/5">
                        <label htmlFor="phone" className="text-base font-medium">How shall we contact you?  <span className="text-red-600">*</span></label>
                        <input id="phone" type="text" required className="block w-full ps-2 border py-3 rounded-md my-3  placeholder:text-gray-400 sm:text-sm" placeholder="Phone Number" value={phone} onChange={(input) => { setPhone(input.target.value.trimStart()) }} />
                    </div>


                    <div className="mb-4 sm:w-3/5">
                        <label htmlFor="email" className="text-base font-medium text-white">Email</label>
                        <input id="email" type="email" required className="block w-full ps-2 border py-3 rounded-md my-3  placeholder:text-gray-400 sm:text-sm" placeholder="Email Address" pattern="^(?=.*[@])(?=.*[.]).{5,}$" value={email}
                            onChange={(input) => setEmail(input.target.value.trimStart())} />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="project" className="text-base font-medium">Tell us about the project?</label>
                    <p className="subLabel">Need a new Website? An app? Let us know how we can help.</p>
                    <textarea id="project" className="block w-full ps-2 border py-3 rounded-md my-3  placeholder:text-gray-400 sm:text-sm" onChange={(input) => setProjectDetails(input.target.value.trimStart())}></textarea>
                </div>

                <div className="mb-6">
                    <label htmlFor="docs" className="text-base font-medium">Please attach any relevant documents</label>
                    <p className="subLabel">Maximum 10 files of 25MB each. Maximum 100MB total.</p>
                    <input  type="file"  className="block w-full ps-2 border py-3 rounded-md my-3 bg-white placeholder:text-gray-400 sm:text-sm"
                      id="docs"  name="docs" accept="application/pdf"  multiple onChange={(event) => {
                            const selectedFiles = event.target.files;
                            if (selectedFiles && selectedFiles.length <= 10) {
                                setFiles(selectedFiles);
                            } else {
                                alert("You can only select up to 10 files.");
                                setFiles(null);
                            }
                        }}
                    />

                </div>


                <div className='flex flex-col sm:flex-row sm:space-x-8 mx-auto'>

                    <div className="mb-4 sm:w-3/5">
                        <label htmlFor="budget" className="text-base font-medium">What's your budget?</label>
                        <p className="subLabel">A transparent budget will help us ensure expectations are met. </p>
                        <input id="budget" type="number" required className="block w-full ps-2 border py-3 rounded-md my-3  placeholder:text-gray-400 sm:text-sm" placeholder="Budget" pattern="[0-9]*" value={budget} onChange={(input) => { setBudget(input.target.value.trimStart()) }} />
                    </div>


                    <div className="mb-4 sm:w-3/5">
                        <p className="subLabel"> </p>
                        <label htmlFor="reference" className="text-base font-medium">How did you hear about us?</label>
                        <input id="reference" type="text" required className="block w-full ps-2 border py-3 rounded-md my-3  placeholder:text-gray-400 sm:text-sm" placeholder="From a friend? From Google" value={reference}
                            onChange={(input) => setReference(input.target.value.trimStart())} />
                    </div>
                </div>


                <div className="my-3 mt-10">
                    <button type="submit" className="flex w-full justify-center rounded-2xl bg-violetBg px-3 py-4 font-semibold leading-6 text-white shadow-sm hover:bg-violetTxt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default ContactPage