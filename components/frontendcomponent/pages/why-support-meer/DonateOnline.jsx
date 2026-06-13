import React from 'react'
import Button from '../../atoms/Button'
import Image from 'next/image'
import Link from 'next/link'

const DonateOnline = () => {
    return (
        <>
            <section>
                <div className="wsm-secD sec-pad-all">
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <h2>Donate Online</h2>
                                <p>Support MEER’s work through a secure online donation. Your contribution helps expand field projects, strengthen research, and protect communities from extreme heat.</p>
                                <Button variant="btn-primary">Donate</Button>
                            </div>
                            <div className="col">
                                <figure>
                                    <Image src="/image/why-suppor-meer/secD.jpg" width={362} height={292} alt="ico" ></Image>
                                </figure>
                                <figcaption>
                                    <figure>
                                        <Image src="/image/icon.svg" width={56} height={52} alt='ico' ></Image>
                                    </figure>
                                    <div className="bottom">
                                        <p>If you have any questions about donations, or if you prefer to give in another way — including stock, estate gifts, or other in-kind contributions — please contact us at:</p>
                                        <Link href="mailto:donations@meer.org">donations@meer.org</Link>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DonateOnline