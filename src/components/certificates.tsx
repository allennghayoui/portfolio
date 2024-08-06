import { type CertificateType } from "@/data/certificates";
import { formatDate } from "@/utils";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

interface CertificatesProps {
  certificates: CertificateType[];
}

const Certificates = ({ certificates }: CertificatesProps) => {
  if (certificates.length === 0) return;

  return (
    <>
      {certificates.length === 1 && (
        <div>
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="flex h-full w-[25rem] flex-col items-start justify-between gap-6 bg-white px-6 py-4 text-slate-950"
            >
              <h2 className="text-xl font-semibold">{certificate.title}</h2>

              <div className="flex w-full flex-col gap-2">
                <div className="flex flex-wrap gap-4">
                  {certificate.companies.map((company, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={20}
                        height={20}
                      />
                      <p className="bg-slate-900 px-2 text-sm text-white">
                        {company.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex w-full items-end justify-between">
                  <p className="text-sm">
                    {formatDate(certificate.dateIssued)}
                  </p>

                  {certificate.link && (
                    <Link
                      target="_blank"
                      href={certificate.link}
                      className="flex items-center gap-2 hover:underline"
                    >
                      <p>Verify</p>
                      <DoubleArrowRightIcon />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {certificates.length > 1 && (
        <div className="grid w-full grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col items-start justify-between gap-6 bg-white px-6 py-4 text-slate-950"
            >
              <h2 className="font-semibold md:text-xl">{certificate.title}</h2>

              <div className="flex w-full flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                  {certificate.companies.map((company, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={20}
                        height={20}
                      />
                      <p className="bg-slate-900 px-2 text-sm text-white">
                        {company.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex w-full items-end justify-between">
                  <p className="text-sm">
                    {formatDate(certificate.dateIssued)}
                  </p>

                  {certificate.link && (
                    <Link
                      target="_blank"
                      href={certificate.link}
                      className="flex items-center gap-2 hover:underline"
                    >
                      <p>Verify</p>
                      <DoubleArrowRightIcon />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Certificates;
