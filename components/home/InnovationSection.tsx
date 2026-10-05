'use client';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { InfoSection } from './InfoSection';

export function InnovationSection() {
    const t = useTranslations('HomePage');
    
    const items = [
        { title: t('innovation.items.0.title'), desc: t('innovation.items.0.desc') },
        { title: t('innovation.items.1.title'), desc: t('innovation.items.1.desc') },
        { title: t('innovation.items.2.title'), desc: t('innovation.items.2.desc') },
        { title: t('innovation.items.3.title'), desc: t('innovation.items.3.desc') },
    ];

    return (
        <InfoSection 
            title={t('innovation.title')}
            subtitle={t('innovation.subtitle')}
            description={t('innovation.desc')}
            items={items}
            imageSrc="/images/coin-new.jpg"
            imageClassName="object-center"
            showButton={true}
            buttonText={t('innovation.btn')}
            actions={
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <Link
                        href="/luxor"
                        className="group relative px-8 py-4 md:px-7 md:py-2.5 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-medium text-sm md:text-[13px] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-2xl shadow-white/5"
                    >
                        <span className="relative z-10">{t('cta_main')}</span>
                        <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        <span className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                    <Link
                        href="/donate"
                        className="px-8 py-4 md:px-7 md:py-2.5 border border-white/20 hover:border-white/40 text-blue-400 rounded-full font-medium text-sm md:text-[13px] transition-all backdrop-blur-md flex items-center justify-center gap-2"
                    >
                        Support Luxor
                    </Link>
                </div>
            }
            imageRight={true}
            gradient="from-blue-600/30 via-purple-500/10 to-transparent"
        />
    );
}
