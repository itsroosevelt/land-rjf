'use client';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, PanInfo, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { Globe, Cpu, Zap } from 'lucide-react';

export function PillarsSection() {
    const t = useTranslations('HomePage');
    const ecosystemAssets = [
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2Flxr_logo.png?alt=media&token=6c98c336-e417-4b75-8d5c-729233c5097b',
            title: 'LUXOR UTILITY ASSET | $LXR',
            href: 'https://luxorstandard.com/',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2FWhatsApp%20Image%202026-07-27%20at%209.35.45%20AM.jpeg?alt=media&token=b09d84e7-061b-45e6-972b-f02d3cbb19dc',
            title: 'EXCELSIOR REAL WORLD ASSET | $XLS',
            href: 'https://excelsiorstandard.com/',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2FWhatsApp%20Image%202026-07-09%20at%209.44.56%20AM.jpeg?alt=media&token=531b81b9-652c-4aa0-8652-c2de6c531e6e',
            title: 'STABLECOIN | $USDX',
            href: 'https://occidentstandard.com/',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2Frai-logo.jpg?alt=media&token=a091e66f-596e-451b-bd46-b3672d352d9e',
            title: 'ROOSEVELT SUPER INTELLIGENCE',
            href: 'https://itsroosevelt.com/',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2FWhatsApp%20Image%202026-08-23%20at%207.04.34%20AM.jpeg?alt=media&token=e577ab9e-4bde-465f-9d0c-b3f7ae93961c',
            title: 'ROYALTY | DIGITAL FINANCIAL INSTITUTION',
            href: 'https://itsroyalty.us/',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2FWhatsApp%20Image%202026-07-09%20at%209.44.55%20AM%20(1).jpeg?alt=media&token=88e66557-972f-4081-8583-fd1f772d83b9',
            title: 'STERLING | MULTISIG - TOKEN LAUNCHER - PAYMENT GATEWAY',
            href: 'https://itssterling.com/',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2Fcropped_circle_image%20(2).png?alt=media&token=ca8a774d-be5d-4e3c-911a-7301f04a661d',
            title: 'THE NEW GRAN COLOMBIA',
            href: 'https://itspormi.com/',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2Fcropped_circle_image%20(5).png?alt=media&token=8552834b-7d13-4e8c-a2bc-74742055e2c1',
            title: 'POR MI | ECUADOR',
            href: 'https://chat.whatsapp.com/IlBVqL8K5XW76JXS23pGgt',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2Fcropped_circle_image%20(6).png?alt=media&token=d045b215-0ab1-4772-8110-6ad5e697d769',
            title: 'POR MI | COLOMBIA',
            href: 'https://chat.whatsapp.com/DBqxD9iAT0S2xPZAMixrmk',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2Fcropped_circle_image%20(7).png?alt=media&token=792a5408-6a1c-44d9-8cab-1cd15646a299',
            title: 'POR MI | VENEZUELA',
            href: 'https://chat.whatsapp.com/DBqxD9iAT0S2xPZAMixrmk',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2Fcropped_circle_image%20(4).png?alt=media&token=1eb162ea-12e5-4e62-bc16-938a8f14738c',
            title: 'POR MI | PANAMA',
            href: 'https://www.itspormi.com/',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2FWhatsApp%20Image%202026-07-13%20at%2010.02.08%20AM.jpeg?alt=media&token=4dc67b27-5ba1-4293-acd7-2d2895c4538f',
            title: 'UDREAMMS | YOUR DREAM IN AMERICA',
            href: 'https://udreamms.com/',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2Fpor-mi-america.png?alt=media&token=9a28c490-8674-4434-8dc1-67c0a9ce60db',
            title: 'POR MI | THE NEW TECHNOLOGICAL REPUBLIC',
            href: 'https://itspormi.com/',
            external: true,
        },
        {
            image: 'https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Ecosystem%2FGemini_Generated_Image_m0uwrzm0uwrzm0uw.jpg?alt=media&token=5174b9f6-335f-49dd-8995-d82e6169e599',
            title: 'POR MI | UNITED STATES',
            href: 'https://itspormi.com/',
            external: true,
        },
    ];

    return (
        <section className="py-32 md:py-48 px-4 md:px-8 bg-black border-t border-white/5">
            <motion.div 
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="w-full max-w-[1800px] mx-auto"
            >
                <div className="text-center mb-24 md:mb-32 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-medium font-sans text-white mb-6 tracking-tight">
                        {t('pillars.title')}
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        {t('pillars.desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/5 py-12">
                    {(t.raw('pillars.items') as any[]).map((col, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                {i === 0 ? <Globe className="text-blue-400" /> : i === 1 ? <Cpu className="text-emerald-400" /> : <Zap className="text-yellow-400" />}
                            </div>
                            <h3 className="text-2xl font-medium font-sans text-white mb-4">{col.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm max-w-xs mx-auto font-sans">
                                {col.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 pt-24 border-t border-white/5 text-center relative overflow-hidden">
                    <h2 className="text-3xl lg:text-5xl font-medium font-sans text-white mb-6 tracking-tight relative z-10">
                        An Ever-Growing Ecosystem
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto mb-16 relative z-10">
                        To realize this vision, we have built a comprehensive application ecosystem that continues to expand. These strategic integrations bridge Latin talent and American innovation, providing the necessary tools to scale operations across the hemisphere.
                    </p>
                    
                    <EcosystemCarousel assets={ecosystemAssets} />
                </div>
            </motion.div>
        </section>
    );
}

const RADIUS_X = 600;
const RADIUS_Z = 300;
const PERSPECTIVE = 1200;
const CENTER_Z_INDEX = 700;

const AUTO_ROTATION_SPEED = -0.05;
const DRAG_SENSITIVITY = 0.15;
const MOMENTUM_FRICTION = 0.95;

function EcosystemCarousel({ assets }: { assets: any[] }) {
    const rotation = useMotionValue(0);
    const [mounted, setMounted] = useState(false);
    const [radius, setRadius] = useState({ x: RADIUS_X, z: RADIUS_Z });

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            const width = window.innerWidth;
            const newRadiusX = Math.min(800, width * 0.45);
            const newRadiusZ = Math.min(400, width * 0.3);
            setRadius({ x: newRadiusX, z: newRadiusZ });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const velocityRef = useRef(0);
    const isDragging = useRef(false);

    useAnimationFrame(() => {
        if (isDragging.current) return;

        if (Math.abs(velocityRef.current) > 0.01) {
            rotation.set(rotation.get() + velocityRef.current);
            velocityRef.current *= MOMENTUM_FRICTION;
        } else {
            rotation.set(rotation.get() + AUTO_ROTATION_SPEED);
        }
    });

    const handlePan = useCallback((_: any, info: PanInfo) => {
        const delta = info.delta.x * DRAG_SENSITIVITY;
        rotation.set(rotation.get() + delta);
        velocityRef.current = delta;
    }, [rotation]);

    const handlePanStart = () => {
        isDragging.current = true;
        velocityRef.current = 0;
    };

    const handlePanEnd = (_: any, info: PanInfo) => {
        isDragging.current = false;
        velocityRef.current = info.velocity.x * 0.01;
    };

    if (!mounted) return null;

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center perspective-[1200px] mt-12 overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing bg-transparent select-none"
                style={{ touchAction: 'none' }}
                onPan={handlePan}
                onPanStart={handlePanStart}
                onPanEnd={handlePanEnd}
            />

            {/* Downward Half-moon center circle (visual guide) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[68%] pointer-events-none" style={{ width: radius.x * 2, height: radius.z * 2 }} />

            {assets.map((asset, index) => {
                return (
                    <CarouselItem 
                        key={asset.title}
                        asset={asset}
                        index={index}
                        total={assets.length}
                        rotation={rotation}
                        radius={radius}
                    />
                );
            })}
        </div>
    );
}

function CarouselItem({ asset, index, total, rotation, radius }: {
    asset: any,
    index: number,
    total: number,
    rotation: any,
    radius: { x: number, z: number }
}) {
    const angleOffset = (360 / total) * index;
    
    const x = useTransform(rotation, (r: number) => {
        const rad = ((r + angleOffset) * Math.PI) / 180;
        return Math.sin(rad) * radius.x;
    });
    
    const z = useTransform(rotation, (r: number) => {
        const rad = ((r + angleOffset) * Math.PI) / 180;
        return Math.cos(rad) * radius.z;
    });

    const scale = useTransform(z, (zv: number) => (zv + PERSPECTIVE) / PERSPECTIVE);
    const opacity = useTransform(z, (zv: number) => Math.min(1, Math.max(0.4, (zv + radius.z) / (2 * radius.z) + 0.3)));
    const y = useTransform(z, (zv: number) => 60 + (zv * 0.2));
    const zIndex = useTransform(z, (zv: number) => Math.round(zv + CENTER_Z_INDEX));

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{ x, y, scale, opacity, zIndex }}
        >
            <div className="pointer-events-auto relative z-[1000] -translate-x-1/2 -translate-y-1/2 group">
                <a href={asset.href} target={asset.external ? "_blank" : undefined} rel={asset.external ? "noopener noreferrer" : undefined} className="block w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/50 p-1.5 border border-white/10 hover:border-blue-500 hover:scale-[1.12] transition-all duration-500 hover:drop-shadow-[0_0_28px_rgba(59,130,246,0.5)]">
                    <img
                        src={asset.image}
                        alt={asset.title}
                        className="w-full h-full rounded-full object-cover"
                    />
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/90 px-4 py-2 rounded-lg border border-white/10 text-xs font-semibold text-white pointer-events-none z-50">
                    {asset.title}
                </div>
            </div>
        </motion.div>
    );
}
