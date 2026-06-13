import React from 'react'
import Image from 'next/image'
import Button from '../../atoms/Button'

const BuildCooler = () => {
    return (
        <section>
            <div className={`banner hero_banner wsm-secF`}>
                <div className="bg">
                    <Image
                        src="/image/why-suppor-meer/secF.png"
                        width={1280}
                        height={700}
                        alt='ico'
                    />
                    <div className="banner-wrapper">
                        <div className="container-fluid">
                            <div className="heading">
                                <figure>
                                    <Image src="/image/icon.svg" width={56} height={52} alt='ico' ></Image>
                                </figure>
                                <h2>Help Us Build a Cooler, Safer World</h2>
                                <p>By supporting MEER, you are helping advance practical solutions to extreme heat — grounded
                                    in science, shaped by communities, and guided by integrity. Thank you for helping us cool from the surface up.</p>
                                <Button variant="btn-primary">Contact Us</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BuildCooler