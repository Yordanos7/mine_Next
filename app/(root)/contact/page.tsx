import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col lg:flex-row gap-12 mt-10">
        <div className="flex-1 max-w-2xl">
          <ContactForm />
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <GithubRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
}
