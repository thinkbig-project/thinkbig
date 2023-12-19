import Image from 'next/image';
import {prisma} from '@/lib/prisma';

export default async function Home() {
    // Used to test prisma configuration -- keep for now
    // const user = await prisma.user.findFirst({
    //   where: {
    //     discordId: '297864485996068864',
    //   },
    // });

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden h-screen'>
            <div className="container mx-auto">
                <div className='flex justify-center'>
                    <Image src={'/thinkbig-logo.svg'} width={500} height={150} alt={'thinkbig logo'}></Image>
                </div>
                <div className='flex justify-center ml-9 mr-9'>
                    <p className='pt-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod
                        tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                        ea
                        rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                        dolor
                        sit
                        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna
                        aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                        kasd
                        gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex justify-center pt-8'>
                    <button className="rounded-full bg-violet-500 hover:bg-violet-600 p-2">I am a button!</button>
                </div>

                <footer className='fixed inset-x-0 bottom-0 m-9 border-4 border-x-transparent bg-black'>
                    <div className='flex justify-stretch'>
                    <div className='flex-1'>
                        <p><strong>Address:</strong></p>
                        <p>Placeholder Street<br/>
                            Placeholder Apartments<br/>
                            123456<br/>
                            Placeholder City</p>
                    </div>
                    <div className='flex-1'>
                        <p><strong>Content Menu:</strong></p>
                        <a href="">Main</a><br/>
                        <a href="">About</a><br/>
                        <a href="">Team</a><br/>
                        <a href="">Contact us</a>
                    </div>
                    <div>
                        <p><strong>Socials:</strong></p>
                        <a href="https://github.com/thinkbig-project">GitHub</a><br/>
                        <a href="https://100devs.org/">100Devs</a>
                    </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
