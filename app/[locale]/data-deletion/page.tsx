import LegalPage, { type LegalSection } from '@/components/legal/LegalPage';

export const metadata = {
    title: "Data Deletion Instructions | Luxor Intelligence",
    description: "How to delete your data from Roosevelt, operated by Luxor Intelligence LLC, and how to remove the app from Facebook, Instagram, WhatsApp and other connected platforms.",
};

const sections: LegalSection[] = [
    {
        heading: "Quick options",
        body: [
            "You can control your data in three ways, from least to most complete:",
            [
                "Revoke Roosevelt's access from the platform where you connected it (Facebook, Instagram, WhatsApp, Google, X, Telegram, GitHub).",
                "Disconnect a channel inside Roosevelt.",
                "Ask us to delete your account and all associated data.",
            ],
        ],
    },
    {
        heading: "Remove the app from Facebook, Instagram and WhatsApp",
        body: [
            "You can revoke Roosevelt's access at any time from Meta:",
            [
                "Facebook: Settings & privacy → Settings → Business Integrations (or \"Apps and Websites\") → select Roosevelt → Remove. You can choose to also delete the posts, photos and videos the app published.",
                "Instagram: Settings → Apps and websites (or Website permissions) → select Roosevelt → Remove.",
                "WhatsApp Business: remove or change the connected business account and permissions in Meta Business Settings.",
            ],
            "After removal we can no longer receive new data from those accounts through Meta. Removing the app on Meta does not by itself delete data we already hold; use the options below for that.",
        ],
    },
    {
        heading: "Revoke other connections",
        body: [
            [
                "Google / Gmail: myaccount.google.com → Security → Third-party apps and services → Roosevelt → Remove access.",
                "X: Settings and privacy → Security and account access → Apps and sessions → Connected apps → Roosevelt → Revoke app permissions.",
                "Telegram: delete or revoke the bot token with @BotFather (/revoke or /deletebot) and disconnect the bot in Roosevelt.",
                "GitHub: Settings → Applications → Authorized OAuth Apps → Roosevelt → Revoke.",
            ],
        ],
    },
    {
        heading: "Disconnect a channel inside Roosevelt",
        body: [
            "Sign in at itsroosevelt.com, open your workspace, go to CTO → Integrations, choose the channel (Messenger, Instagram, WhatsApp, Telegram, X, Gmail) and select Disconnect. We stop receiving data from that channel and delete its stored access tokens promptly.",
        ],
    },
    {
        heading: "Delete your account and data",
        body: [
            "To request deletion of your Roosevelt account and the personal data associated with it (including data received from Meta, Google and other connected platforms), email us:",
            [
                "To: legal@luxorintelligence.com",
                "Subject: \"Data deletion request\"",
                "From: the email address of your Roosevelt account (so we can verify the request).",
                "Include (if applicable): the connected Facebook Page, Instagram account or WhatsApp number, and the name of the business, so we can locate the right records.",
            ],
            "We will confirm receipt within a few business days, verify that the request comes from you, and complete the deletion within 30 days. If we need more time or information we will tell you. When finished we will send you a confirmation message.",
        ],
    },
    {
        heading: "What is deleted and what may be kept",
        body: [
            [
                "Deleted or irreversibly anonymized: profile, workspace data, contacts, conversations, files, flows and integration credentials associated with your account, including data received from Meta platforms and Google APIs.",
                "Overwritten in the ordinary course of backup rotation: copies in backups.",
                "Retained for a limited time where required: records we must keep for legal, tax, accounting, fraud-prevention or security reasons (for example payment and invoice records), and data needed to establish or defend legal claims.",
                "Not deletable by us: public blockchain data such as wallet addresses and transaction records, and data held by the third-party platforms you connected, which you control through those platforms.",
            ],
        ],
    },
    {
        heading: "If you are a customer of a business that uses Roosevelt",
        body: [
            "If you only sent a message to a business that uses Roosevelt (for example through Messenger, Instagram or WhatsApp), that business decides how your conversation data is used and is responsible for answering your request. You can ask the business to delete your data. You can also contact us at legal@luxorintelligence.com with the business name and your profile or phone number and we will help route or process the request.",
        ],
    },
    {
        heading: "Questions",
        body: [
            "Email legal@luxorintelligence.com for privacy and deletion requests, or support@luxorintelligence.com for help using Roosevelt. Luxor Intelligence LLC, 470 W 200 N, Salt Lake City, UT 84103, USA.",
        ],
    },
];

export default function DataDeletionPage() {
    return (
        <LegalPage
            title="Data Deletion Instructions"
            updated="October 4, 2026"
            intro="You are in control of your data. Here is how to disconnect Roosevelt from your accounts and how to have your data deleted by Luxor Intelligence LLC."
            sections={sections}
        />
    );
}
