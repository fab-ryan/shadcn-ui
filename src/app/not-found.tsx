import { Alert, AlertDescription, AlertTitle, } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';
import Link from 'next/link';


export default function NotFound(): JSX.Element {
    return (
        <div className="h-100 flex justify-center mt-20 p-32">
        <Alert>
            <Terminal className="h-4 w-5" />

            <AlertTitle>Not Found Page</AlertTitle>
            <AlertDescription>
                Go Back to Home Page because this page was not found
                <Button variant='secondary'>
                    <Link href="/">HOME</Link>
                </Button>
            </AlertDescription>
        </Alert>
        </div>
    )
}