import React from 'react';

export type LegalSection = { heading: string; body: (string | string[])[] };

/** Plain, server-rendered page for legal documents (indexable, no client JS). */
export default function LegalPage({
    title,
    updated,
    intro,
    sections,
}: {
    title: string;
    updated: string;
    intro: string;
    sections: LegalSection[];
}) {
    return (
        <main className="min-h-screen bg-black text-white/80 px-6 pt-32 pb-24">
            <article className="max-w-3xl mx-auto">
                <h1 className="text-white text-4xl md:text-5xl font-[var(--font-outfit)] font-medium tracking-tight">{title}</h1>
                <p className="mt-3 text-sm text-white/40">Last updated: {updated}</p>
                <p className="mt-8 leading-relaxed">{intro}</p>

                {sections.map((s, i) => (
                    <section key={s.heading} className="mt-10">
                        <h2 className="text-white text-xl font-medium mb-3">
                            {i + 1}. {s.heading}
                        </h2>
                        <div className="space-y-3 leading-relaxed">
                            {s.body.map((block, j) =>
                                Array.isArray(block) ? (
                                    <ul key={j} className="list-disc pl-6 space-y-1.5">
                                        {block.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p key={j}>{block}</p>
                                )
                            )}
                        </div>
                    </section>
                ))}
            </article>
        </main>
    );
}
