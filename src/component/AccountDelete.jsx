import React from 'react'

const AccountDelete = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10 bg-gray-200 '>
            <div className='flex flex-col gap-3 md:gap-5'>
                <h1 className='text-3xl md:text-4xl font-bold text-green-600 text-center'>NE-CAB</h1>
                <h1 className='text-lg md:text-3xl font-semibold text-center'>Account Deletion Request</h1>
            </div>

            <div className='max-w-6xl flex flex-col gap-5 mx-auto my-10 p-6 bg-white rounded-lg shadow-md'>
                <div className='p-4 rounded-md mb-6 flex flex-col gap-4'>
                    <h3 className='font-semibold text-xl md:text-2xl mb-2'>How to Delete Your Account</h3>
                    <p className='mb-2 text-sm md:text-xl'>We value your privacy and make it easy to request the deletion of your account and associated data. To initiate a deletion request, email us at:</p>
                    <div className=' p-2  text-center bg-gray-100 text-sm md:text-xl rounded-2xl font-semibold'>support.necab@gmail.com</div>
                </div>

                <ol className="mb-6 space-y-4 text-gray-700">
                    <li className="flex items-center gap-3">
                        <span className="bg-green-600 text-white rounded-full w-5 h-7 md:w-7 md:h-7 flex items-center justify-center text-sm font-semibold">
                            1
                        </span>
                        <span className='text-lg md:text-xl'>Send email request</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="bg-green-600 text-white rounded-full w-5 h-7 md:w-7 md:h-7 flex items-center justify-center text-sm font-semibold">
                            2
                        </span>
                        <span className='text-lg md:text-xl' >Verification</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="bg-green-600 text-white rounded-full w-5 h-7 md:w-7 md:h-7 flex items-center justify-center text-sm font-semibold">
                            3
                        </span>
                        <span className='text-lg md:text-xl'>Processing</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="bg-green-600 text-white rounded-full w-5 h-7 md:w-7 md:h-7 flex items-center justify-center text-sm font-semibold">
                            4
                        </span>
                        <span className='text-lg md:text-xl'>Confirmation</span>
                    </li>
                </ol>


                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-lg md:text-xl lg:text-2xl'>Email Requirements</h3>
                    <span className='text-sm md:text-lg'>Please include the following information in your email:</span>
                    <ul className='list-disc list-inside text-gray-700 mt-2 space-y-1  text-sm md:text-lg'>
                        <li>Subject: “Account Deletion Request”</li>
                        <li>Your registered mobile number</li>
                        <li>Your email (optional)</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-lg md:text-xl lg:text-2xl'>What Happens Next</h3>
                    <ul className='list-decimal list-inside text-gray-700 space-y-1 text-sm md:text-lg mt-2'>
                        <li>We will verify your identity as the account owner</li>
                        <li>Your account and personal data will be scheduled for deletion</li>
                        <li>We will process your request within 15 business days</li>
                        <li>You will receive a confirmation email once the deletion is complete</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-sm md:text-xl lg:text-2xl'>Data Deletion Information</h3>
                    <p className='text-gray-700 mb-2  text-lg'>When your account is deleted:</p>

                    <ol className='list-disc list-inside  text-lg text-gray-700 mt-1 space-y-8'>
                        <li>Data that will be permanently deleted:
                            <ul className='list-disc list-inside text-sm md:text-lg text-gray-700  mt-1 px-5'>
                                <li>Personal profile information</li>
                                <li>User preferences or settings</li>
                                <li>Account activity history</li>
                                <li>User-generated content</li>
                            </ul>
                        </li>
                        <li>Data that may be retained:
                            <ul className='list-disc list-inside text-gray text-sm md:text-lg mt-1 px-5'>
                                <li>Financial data and transaction records will be retained for 6 months for legal compliance purposes</li>
                                <li>Information required for other legal compliance (typically retained for 90 days)</li>
                                <li>Anonymized usage statistics that cannot be linked to your identity</li>
                                <li>Transaction records as required by applicable laws</li>

                            </ul>
                        </li>

                    </ol>

                </div>

                <div className='flex flex-col gap-5'>
                    <h3 className='font-semibold text-lg md:text-xl lg:text-2xl '>Additional Information</h3>
                    <span className='text-lg'>Please note that:</span>
                    <ul className='list-disc list-inside text-gray-700 mt-2 text-sm md:text-lg'>
                        <li>Once data deletion is complete, it cannot be reversed</li>
                        <li>Any active subscriptions will be automatically canceled</li>
                        <li>Content shared with other users may remain visible even after your account is deleted</li>
                        <li>Backups containing your information may take up to 30 days to be fully removed from our systems</li>
                        <li>Financial records and transaction data are required to be kept for 6 months for legal and regulatory compliance</li>


                    </ul>
                </div>


            </div>

            <div className='flex flex-col gap-3'>
                <p className='text-center text-sm md:text-lg mt-6 text-gray-500'>
                    If you have any questions about the account deletion process, please contact our support team at  <strong>support.necab@gmail.com</strong>
                </p>
                <p className='text-center text-gray-800'>
                    © 2025 NE CAB. All rights reserved.
                </p>
            </div>




        </div>
    )
}

export default AccountDelete