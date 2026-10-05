import LegalPage, { type LegalSection } from '@/components/legal/LegalPage';

export const metadata = {
    title: "Privacy Policy | Luxor Intelligence",
    description: "How Luxor Intelligence LLC collects, uses, shares and protects personal data on luxorintelligence.com and in Roosevelt, and your privacy rights.",
};

const sections: LegalSection[] = [
    {
        heading: "Who we are and scope",
        body: [
            "Luxor Intelligence LLC (\"Luxor Intelligence\", \"we\", \"us\", \"our\"), 470 W 200 N, Salt Lake City, UT 84103, USA, operates luxorintelligence.com and a family of products listed there, including Roosevelt (itsroosevelt.com), a Super Intelligence (\"SI\") assistant that helps people and businesses manage their communications, customers, marketing and operations, as well as Royalty (itsroyalty.us) and Sterling (itssterling.com).",
            "This Privacy Policy applies to luxorintelligence.com and to Roosevelt, and describes how we collect, use, disclose and protect personal data in those services (together, the \"Service\"). Other products in our ecosystem may publish their own notices on their websites describing practices specific to them; where they do not, this policy applies to the extent they process personal data on behalf of Luxor Intelligence LLC.",
            "Contact for privacy matters: legal@luxorintelligence.com.",
        ],
    },
    {
        heading: "Our role: controller and processor",
        body: [
            "Depending on the data, we act in different roles:",
            [
                "Controller (or \"business\" under US state laws): for the account, billing, security, usage and website data we collect about you as a user or visitor of the Service.",
                "Processor (or \"service provider\"): for the content you or your business load into or connect to Luxor Intelligence (\"Customer Data\"), such as your contacts, customer conversations, messages, comments, files and records. In that case you (or your business) are the controller and decide why and how that data is processed; we process it on your instructions to provide the Service.",
            ],
            "If you are a business that uses Luxor Intelligence to communicate with your own customers, you are responsible for having a lawful basis, providing the required notices and obtaining the consents (for example for marketing messages) needed to process their data through the Service. A data processing addendum is available on request at legal@luxorintelligence.com.",
        ],
    },
    {
        heading: "Information we collect",
        body: [
            [
                "Account and profile data: name, email address, profile picture, sign-in identifiers and authentication provider (for example Google), language and workspace settings, and the personal or business profiles you create.",
                "Workspace content: contacts, customer and lead records, notes, tasks, boards and cards, flows and automations, templates, files and other content you create or import.",
                "Connected-channel data: when you connect a channel (WhatsApp, Messenger, Instagram, Telegram, X, Gmail), we receive and store the messages, comments, reactions, media, sender and recipient identifiers (such as phone numbers, usernames, page-scoped IDs and email addresses), names and profile information that the channel provides, as well as the page, account or phone-number identifiers and access tokens needed to operate that channel for you.",
                "Billing data: plan, subscription status, payment identifiers and, for card payments, limited details returned by Stripe (such as card brand, last four digits and billing country). We do not store full card numbers. For on-chain payments we process public wallet addresses and transaction signatures, which are public on the blockchain.",
                "SI interaction data: prompts, instructions and content you submit to SI features and the outputs generated.",
                "Technical and usage data: IP address, device, browser and operating-system information, log and diagnostic data, timestamps, referring pages and security events.",
                "Communications with us: messages you send to support, legal or careers mailboxes, and information in job applications.",
                "Cookies and local storage: described below.",
            ],
            "We receive this information directly from you, from the channels and services you connect, from our payment processor, and automatically through your use of the Service. We do not knowingly collect sensitive personal data (such as government identifiers, health, biometric or precise-location data) as a feature of the Service. If you or your customers submit such data in free-text fields or files, you are responsible for ensuring that you are permitted to do so.",
        ],
    },
    {
        heading: "Data we receive from Meta (Facebook, Instagram, WhatsApp)",
        body: [
            "When you choose to connect a Facebook Page, Instagram professional account or WhatsApp Business account, we access only the data and permissions you grant on Meta's authorization screen. Depending on the permissions granted, this may include Page and account identifiers and names, messages sent to your business, comments and mentions on your content, content you publish, message and ad insights, and basic profile information of people who contact your business (such as name, username and page-scoped ID).",
            "We use this data only to provide and improve the features you request: showing and answering conversations, running automations you configure, organizing contacts, publishing content, reporting and, where enabled, managing campaigns and leads. We do not sell Meta platform data, we do not use it for advertising profiling or for surveillance, we do not make it available to data brokers, and we do not use it for purposes unrelated to the Service. We retain it only as described in this policy and delete it when you disconnect the integration, delete your account or ask us to, subject to the exceptions below.",
            "Our use of Meta platform data is subject to the Meta Platform Terms, Meta Developer Policies and, for WhatsApp, the WhatsApp Business Terms and Messaging Policy. You can revoke our access at any time in your Facebook or Instagram settings (Business Integrations) or by disconnecting the channel in the Service.",
        ],
    },
    {
        heading: "Data we receive from Google (including Gmail)",
        body: [
            "If you connect a Google account, we request only the scopes needed for the features you enable (for example reading and sending email for the Gmail integration, and your basic profile and email address). We store the access and refresh tokens needed to operate the integration.",
            "Our use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. In particular: we use Google user data only to provide or improve user-facing features that are visible in the Service; we do not transfer it to others except as needed to provide those features, to comply with law, or as part of a merger or sale with notice to you; we do not use it for serving advertisements; and we do not allow humans to read it unless you give consent for specific messages, it is necessary for security or abuse investigation, or it is required by law. We do not use Google user data to develop, improve or train generalized machine-learning models.",
        ],
    },
    {
        heading: "How we use information and our legal bases",
        body: [
            "We use personal data for the following purposes. Where the GDPR or UK GDPR applies, the legal basis is shown in brackets.",
            [
                "To provide, operate, maintain and secure the Service, authenticate you and process your instructions [performance of a contract].",
                "To process payments, manage subscriptions and prevent fraud [performance of a contract; legitimate interests].",
                "To provide SI-assisted features, automations, summaries and reports you request [performance of a contract].",
                "To provide customer support and communicate with you about your account, security and changes to the Service [performance of a contract; legitimate interests].",
                "To monitor, debug and improve the Service, develop new features and keep the Service safe, including detecting abuse and enforcing our terms [legitimate interests].",
                "To comply with legal obligations, respond to lawful requests and establish or defend legal claims [legal obligation; legitimate interests].",
                "To send you product or marketing communications where permitted, with an easy way to opt out [consent or legitimate interests, as applicable].",
            ],
            "Each customer's workspace is logically isolated: Customer Data is stored under your own account and is not made visible to other customers.",
        ],
    },
    {
        heading: "Super Intelligence (SI) and automated decisions",
        body: [
            "Luxor Intelligence includes SI-assisted features, which are powered by machine-learning models operated by third-party providers. When you use them, the content you submit (and the context needed to answer, such as relevant conversation or record content you choose to include) is sent to our third-party model providers (for example Google Gemini) to generate a response. We do not ourselves use Customer Data to train generalized models. Our model providers process submitted content under their own terms and privacy policies.",
            "SI output is generated automatically by a non-human system; it can be inaccurate, incomplete or inappropriate and should be reviewed before you rely on it or send it to others. We do not use the Service to make decisions that produce legal or similarly significant effects about individuals based solely on automated processing; automations you configure (such as auto-replies, routing or tagging) are controlled by you and are your responsibility. Where applicable law gives you rights regarding automated decision-making, you can contact us to exercise them.",
        ],
    },
    {
        heading: "Cookies, local storage and similar technologies",
        body: [
            "We use cookies and similar technologies on luxorintelligence.com and in the Roosevelt application:",
            [
                "Strictly necessary: authentication and session storage (Firebase Authentication in Roosevelt), security, and remembering your language, wallet-connection or interface preferences.",
                "Analytics: luxorintelligence.com uses Google Analytics (Google Tag Manager / gtag.js) to understand how visitors use the website (pages viewed, approximate location, device and browser type). Google may set cookies and receive your IP address and usage data for this purpose. You can opt out with the Google Analytics Opt-out Browser Add-on or by blocking cookies in your browser.",
                "Third-party integrations: the Meta JavaScript SDK (when you connect Facebook, Instagram or WhatsApp in Roosevelt) and, in the web-builder feature, a cookie storing a GitHub connection you authorize. These are set only when you use those features.",
            ],
            "We do not use third-party advertising cookies. Where the law requires your consent for non-essential cookies (for example in the EEA, UK or certain US states), we will ask for it; you can withdraw it at any time through your browser settings or by contacting us. You can block or delete cookies in your browser, but parts of the Service may not work without the necessary ones.",
        ],
    },
    {
        heading: "Who we share data with",
        body: [
            "We do not sell your personal data, and we do not share it for cross-context behavioral advertising. We disclose personal data only in these situations:",
            [
                "Service providers (sub-processors) that process data on our behalf under written agreements, listed below.",
                "The channels and services you connect, when needed to carry out your instructions (for example sending a reply through WhatsApp or publishing to a Page).",
                "Professional advisers, insurers and auditors bound by confidentiality.",
                "Authorities or other parties where we believe disclosure is required by law, legal process or to protect rights, safety and security.",
                "A successor entity in a merger, acquisition, financing or sale of assets, with notice to you where required.",
                "Any other party with your consent or at your direction.",
            ],
            "Current categories of sub-processors:",
            [
                "Google Cloud / Firebase: authentication, database, file storage and serverless functions (United States and other Google Cloud regions).",
                "Vercel: application hosting and delivery (United States and global edge network).",
                "Stripe: card payment processing and subscription billing (United States and other countries where Stripe operates).",
                "Solana network participants and RPC providers: on-chain payments and wallet interactions (public blockchain).",
                "Google (Gemini / Vertex AI) and other model providers we enable: processing of content submitted to SI features.",
                "Meta Platforms, Google, Telegram and X: when you connect their services (these providers act under their own terms and privacy policies).",
                "Email and communication tools we use to respond to support, legal and careers requests.",
            ],
            "We will provide an up-to-date list of sub-processors on request at legal@luxorintelligence.com.",
        ],
    },
    {
        heading: "International transfers",
        body: [
            "We are based in the United States and our providers may process data in the United States and other countries that may not offer the same level of data protection as your country. Where required, we rely on appropriate safeguards for transfers of personal data from the EEA, UK or Switzerland, such as the European Commission's Standard Contractual Clauses (and the UK Addendum), adequacy decisions or the EU-US Data Privacy Framework certification of our providers.",
        ],
    },
    {
        heading: "Data retention",
        body: [
            [
                "Account and workspace data: kept while your account is active and until you delete it or ask us to.",
                "Channel integrations: when you disconnect a channel, we stop receiving data from it and delete its stored access tokens promptly; previously received conversation data remains in your workspace until you delete it or your account is deleted.",
                "After account deletion or a verified deletion request: personal data is deleted or irreversibly anonymized within a reasonable period, generally within 30 days, and remaining copies in backups are overwritten in the ordinary course of backup rotation.",
                "Billing and tax records: retained for the period required by applicable law.",
                "Security and access logs: retained for a limited period unless needed longer to investigate abuse or comply with law.",
                "Legal holds and disputes: data may be retained as needed to establish, exercise or defend legal claims.",
            ],
        ],
    },
    {
        heading: "Security",
        body: [
            "We use technical and organizational measures designed to protect personal data, including per-customer data isolation enforced by database security rules and server-side authorization, encrypted connections (TLS), encryption at rest provided by our infrastructure providers, and access controls for our personnel. No method of transmission or storage is completely secure, and we cannot guarantee absolute security. Please protect your credentials and tell us immediately at support@luxorintelligence.com if you suspect unauthorized access.",
            "If we become aware of a personal-data breach affecting you, we will notify you and the relevant authorities as required by applicable law, including without undue delay and, where the GDPR applies to us as controller, within 72 hours where feasible. As a processor, we will notify the affected customer without undue delay.",
        ],
    },
    {
        heading: "Your rights (EEA, UK and Switzerland)",
        body: [
            "Subject to conditions and exceptions in the GDPR and UK GDPR, you may have the right to: access your personal data; correct inaccurate data; delete your data; restrict or object to processing (including processing based on legitimate interests and direct marketing); data portability; withdraw consent at any time (without affecting earlier processing); and not to be subject to certain solely automated decisions. You also have the right to lodge a complaint with your local data protection authority.",
            "To exercise these rights, email legal@luxorintelligence.com. We may need to verify your identity. If your data is Customer Data processed on behalf of a business that uses Luxor Intelligence, we may refer your request to that business.",
        ],
    },
    {
        heading: "Your rights (California and other US states)",
        body: [
            "Under the California Consumer Privacy Act as amended (CCPA/CPRA) and similar laws in other US states (for example Colorado, Connecticut, Virginia, Utah and Texas), residents may have the right to know what personal information we collect, use and disclose; to access and obtain a portable copy; to correct inaccurate information; to delete personal information; to opt out of the sale or sharing of personal information and of targeted advertising and certain profiling; to limit the use of sensitive personal information; and not to be discriminated against for exercising these rights.",
            [
                "Categories collected in the last 12 months: identifiers (name, email, phone number, usernames, IP address); customer records and commercial information (plan and billing status); internet and device activity; communications content you send through the Service; professional or employment information in job applications; and inferences you ask SI features to generate. See \"Information we collect\" for details and sources.",
                "Purposes and disclosures: as described in \"How we use information\" and \"Who we share data with\". We disclose these categories to the service providers listed above for business purposes.",
                "Sale and sharing: we do not sell personal information and do not share it for cross-context behavioral advertising, and we have no actual knowledge of selling or sharing the personal information of anyone under 16.",
                "Sensitive personal information: we do not use or disclose sensitive personal information for purposes other than those permitted by law.",
            ],
            "To exercise your rights, email legal@luxorintelligence.com with the subject \"Privacy request\". We will verify your identity (for example by matching the email associated with your account) and respond within 45 days (extendable once by 45 days where permitted). You may use an authorized agent, who must provide proof of authorization. If we deny a request, you may appeal by replying to our decision, and you may also contact your state attorney general. California residents may also request information about disclosures of personal information to third parties for their direct marketing purposes (California \"Shine the Light\" law); we do not make such disclosures.",
        ],
    },
    {
        heading: "Children",
        body: [
            "The Service is not directed to children under 18 and we do not knowingly collect personal data from them. If you believe a child has provided us with personal data, contact us at legal@luxorintelligence.com and we will delete it.",
        ],
    },
    {
        heading: "Third-party links and services",
        body: [
            "The Service may link to or integrate third-party websites and services that we do not control. Their privacy practices are governed by their own policies, and we encourage you to read them.",
        ],
    },
    {
        heading: "Changes to this policy",
        body: [
            "We may update this policy from time to time. We will post the new version here with a new \"last updated\" date and, for material changes, notify you through the Service or by email before they take effect where required.",
        ],
    },
    {
        heading: "Contact us",
        body: [
            "Luxor Intelligence LLC, 470 W 200 N, Salt Lake City, UT 84103, USA.",
            [
                "Privacy and legal requests (including our contact for data protection matters): legal@luxorintelligence.com",
                "Support: support@luxorintelligence.com",
                "Business inquiries: business@luxorintelligence.com",
                "Careers: careers@luxorintelligence.com",
            ],
            "If we appoint a representative in the European Union or the United Kingdom, their details will be published on this page.",
        ],
    },
];

export default function PrivacyPage() {
    return (
        <LegalPage
            title="Privacy Policy"
            updated="October 4, 2026"
            intro="Your privacy matters to us. This Privacy Policy describes what personal data Luxor Intelligence LLC collects through luxorintelligence.com and Roosevelt, how we use and protect it, who we share it with, and the choices and rights you have."
            sections={sections}
        />
    );
}
