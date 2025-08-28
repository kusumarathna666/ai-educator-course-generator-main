import React from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"
import Image from 'next/image'

function LoadingDialog({ loading }) {
    return (
        <AlertDialog open={loading}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Processing</AlertDialogTitle> 
                    {/* Move <div> outside of <AlertDialogDescription> */}
                    <div className="flex flex-col items-center py-10">
                        <Image src={'/loader.gif'} width={100} height={100} alt='Loading...' />
                        <h2>Please wait... AI is working on your course</h2>
                    </div>
                    <AlertDialogDescription>
                        This may take a few moments.
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default LoadingDialog
