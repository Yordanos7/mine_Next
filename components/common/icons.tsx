import {
  AlertTriangle,
  ArrowRight,
  Award,
  BadgeCheck,
  BookMarked,
  Building,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Download,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Menu,
  Moon,
  MoreVertical,
  Music,
  Palette,
  Mail,
  MessageSquare,
  Phone,
  Pizza,
  Plus,
  Scroll,
  Settings,
  Sparkles,
  SunMedium,
  Trash,
  User,
  X,
  Zap,
} from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import { BiLaugh, BiSolidUser } from "react-icons/bi";
import { BsInfoCircle, BsQuestionCircle } from "react-icons/bs";
import {
  HiBriefcase,
  HiOutlineExternalLink,
  HiOutlineLink,
} from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import {
  SiAmazonaws,
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGmail,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTwitter,
  SiTypescript,
  SiTurborepo,
  SiTrpc,
  SiSass,
  SiGreensock,
  SiPostgresql,
  SiFirebase,
  SiVite,
  SiChartdotjs,
  SiGooglechrome,
  SiVercel,
  SiReactquery,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

export const Icons = {
  contact: Phone,
  gitRepoIcon: BookMarked,
  gitOrgBuilding: Building,
  gitBranch: IoIosGitBranch,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  mail: Mail,
  messageSquare: MessageSquare,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  menu: Menu,
  chevronDown: ChevronDown,
  laughEmoji: BiLaugh,
  check: Check,
  award: Award,
  badgeCheck: BadgeCheck,
  infoMark: BsInfoCircle,
  questionMark: BsQuestionCircle,
  link: HiOutlineLink,
  download: Download,
  externalLink: HiOutlineExternalLink,
  star: AiFillStar,
  amazonaws: SiAmazonaws,
  angular: SiAngular,
  bootstrap: SiBootstrap,
  css3: SiCss3,
  graphql: SiGraphql,
  html5: SiHtml5,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  mui: SiMui,
  mysql: SiMysql,
  nestjs: SiNestjs,
  netlify: SiNetlify,
  nextjs: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiNextdotjs size={Number(size) * 0.7} color="black" {...props} />
    </div>
  ),
  react: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiReact size={Number(size) * 0.7} color="#61DAFB" {...props} />
    </div>
  ),
  reactNative: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiReact size={Number(size) * 0.7} color="#61DAFB" {...props} />
    </div>
  ),
  typescript: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiTypescript size={Number(size) * 0.7} color="#3178C6" {...props} />
    </div>
  ),
  nodejs: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiNodedotjs size={Number(size) * 0.7} color="#339933" {...props} />
    </div>
  ),
  redux: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiRedux size={Number(size) * 0.7} color="#764ABC" {...props} />
    </div>
  ),
  tailwindcss: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiTailwindcss size={Number(size) * 0.7} color="#06B6D4" {...props} />
    </div>
  ),
  betterAuth: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        {...props}
      >
        <title>BetterAuth Logo</title>
        <g fill="black">
          <path d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z" />
          <path d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z" />
          <path d="M252.762 204.455v92.089h-96.774v-92.089z" />
        </g>
      </svg>
    </div>
  ),
  monorepo: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiTurborepo size={Number(size) * 0.7} color="#EF4444" {...props} />
    </div>
  ),
  trpc: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiTrpc size={Number(size) * 0.7} color="#2563EB" {...props} />
    </div>
  ),
  sass: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiSass size={Number(size) * 0.7} color="#CF649A" {...props} />
    </div>
  ),
  gsap: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiGreensock size={Number(size) * 0.7} color="#88CE02" {...props} />
    </div>
  ),
  postgresql: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiPostgresql size={Number(size) * 0.7} color="#336791" {...props} />
    </div>
  ),
  zustand: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M100.074 1.816q3.34 1.747 5.113 5.201-.323-.11-.166.335.934 2.667 1.091 5.487.005.112-.032.412-.032.25.056.423a.47.47 0 0 1-.061.511q-.394.471-.276.95.142.58.24 1.175.073.44-.451.216l-.603-.257q-.749-.209-.735-.88.022-1.011.211-2.065.032-.187 0-.375-.473-2.54-1.08-4.717-.19-.682-.659-1.07-.128-.5-.468-.87-.12-.337-.412-.545-.244-.592-.86-.726-.114-.16-.288-.267l-.992-1.29a.433.225 65.8 0 0-.193-.152q-2.035-.592-4.154-.375-1.753.061-3.302.733-1.049.452-2.941 1.579-2.263 1.349-4.003 3.384l-2.474 2.474q-1.004.662-1.948 2.053-.107.158-.289.672l-.506 1.424q-.492.927-.708 1.958-.091.441-.41.123-.249-.251-.677-.198l-.067-.021q.34-.16.452-.54.101-.534.208-1.066.075-.363.335-.818.238-.423.343-.844.278-1.129 1.054-1.896a.14.45 83 0 1 .232-.105q.182-.045.116-.267a.324.255 57 0 1 .021-.238q1.167-1.903 2.74-3.498 1.629-1.444 3.245-2.907 1.327-.758 2.625-1.56 1.741-1.078 2.678-1.437 2.707-1.036 5.638-.803 1.26.102 2.356.677z" fill="#090706" />
        <path d="M101.987 6.828q.243.216.412.481.082.13.171.152.187.048.153-.3.468.388.658 1.07.607 2.179 1.081 4.718.032.186 0 .375-.19 1.054-.212 2.065-.013.671.737.88v.246q-.442.08-.624.828-.123.496-.043 1.002.107.69-.187 1.341-.172.38-.132 1.327.032.762-.066 1.319-.436 2.4-1.033 4.762-.92-.208-1.616-.856a.307.362 48.8 0 0-.434.006L99.4 27.346a.289.254 33.3 0 1-.248.035q-.332-.105-.115-.431.072-.107.107-.236l.09-.344q1.22.455.284-.428-.249-.239-.056-.434a.152.426 52.8 0 0 .141-.217q.078-.42-.425-.337-.235-.387-.088-.803.131.321.361.084.348-.357.444-.032a.463.177 82.9 0 0 .12.227q.496.422.737-.637a.223.223 0 0 0-.239-.27q-.209.021-.553-.12-.061-.024-.196-.161-.13-.131-.318.04l.2-.936q.319-.09.562-.305a.273.319 65 0 0 .105-.23q-.01-.335-.4-.335-.173-.434.116-.792a.838.833 59.2 0 0 .168-.68q-.192-.984.284-1.705.283-.43-.018-.805a.463.19 40.7 0 1-.118-.23l-.24-1.931q.328-.102.515-.38a.239.43 21.2 0 1 .196-.163q.323-.096.225.264-.073.265.168.51a.31.362 18.5 0 1 .09.226l.057 1.54a.42.198 38.1 0 0 .115.229q.316.356-.115.64a.24.268 72.9 0 0-.12.2q-.038.893-.345 1.188-.482.458.22.942a.27.27 0 0 0 .419-.175q.224-1.214.372-2.517.064-.565-.089-1.402-.168-.91-.093-1.85.038-.442-.237-.73a.326.326 0 0 1-.043-.404q.157-.248-.094-.393a.963.963 0 0 1-.407-.47q-.228-.568-.717-.544-.31.017-.132-.236.276-.387.321-.885a.326.316 28.9 0 0-.071-.235q-2.189-2.695-5.723-2.975-3.387-.268-6.01 1.853-1.035.84-2.057 1.702-2.619 2.208-3.914 5.392-.819-.93-2.001-1.24a.262.439 53 0 0-.25.027q-.331.129-.492-.192l.506-1.424q.182-.514.29-.67.943-1.392 1.947-2.054-.01.132.075.129.04 0 .096-.05 1.29-1.135 2.448-2.408.64-.507 1.287-.999 2.63-2.258 5.835-3.451 1.705-.634 3.23-.564 3.735.162 6.38 3.063z" fill="#443e38" />
      </svg>
    </div>
  ),
  zod: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M2.584 3.582a2.247 2.247 0 0 1 2.112-1.479h14.617c.948 0 1.794.595 2.115 1.487l2.44 6.777a2.248 2.248 0 0 1-.624 2.443l-9.61 8.52a2.247 2.247 0 0 1-2.963.018L.776 12.773a2.248 2.248 0 0 1-.64-2.467Zm12.038 4.887-9.11 5.537 5.74 5.007c.456.399 1.139.396 1.593-.006l5.643-5.001H14.4l6.239-3.957c.488-.328.69-.947.491-1.5l-1.24-3.446a1.535 1.535 0 0 0-1.456-1.015H5.545a1.535 1.535 0 0 0-1.431 1.01l-1.228 3.37z" />
      </svg>
    </div>
  ),
  turso: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="m23.31.803-.563-.42-1.11 1.189-.891-1.286-.512.235.704 1.798-.326.35L18.082 0l-.574.284 2.25 4.836-2.108.741h-.05l-1.143-1.359-1.144 1.36H8.687l-1.144-1.36-1.146 1.363H6.36l-2.12-.745L6.491.284 5.919 0l-2.53 2.668-.327-.349.705-1.798-.512-.236-.89 1.287L1.253.382.69.804 2.42 3.69l-.89.939.311 2.375 2.061.787L3.9 8.817H1.947v.444l.755 1.078 1.197.433v6.971l3.057 4.55L7.657 24l1.101-1.606L9.9 24l.999-1.606L12 24l1.102-1.606L14.1 24l1.141-1.606L16.343 24l.701-1.706 3.058-4.55v-6.972l1.196-.433.756-1.078v-.444h-1.952l.003-1.03 2.054-.784.311-2.375-.89-.939zm-8.93 18.718H8.033l.793-1.615.794 1.615.793-1.083.793 1.083.794-1.083.793 1.083.794-1.083.793 1.083.793-1.615.794 1.615zm3.886-7.39-3.3 1.084-.143 3.061-2.827.627-2.826-.627-.142-3.06-3.3-1.085v-1.635l4.266 1.21-.052 4.126h4.109l-.052-4.127 4.266-1.209z" />
      </svg>
    </div>
  ),
  firebase: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiFirebase size={Number(size) * 0.7} color="#FFCA28" {...props} />
    </div>
  ),
  java: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <FaJava size={Number(size) * 0.7} color="#007396" {...props} />
    </div>
  ),
  restApi: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <TbApi size={Number(size) * 0.7} color="#FF5722" {...props} />
    </div>
  ),
  clerk: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240C186.274 240 240 186.274 240 120C240 53.7258 186.274 0 120 0ZM55 120C55 84.1015 84.1015 55 120 55C155.898 55 185 84.1015 185 120C185 155.898 155.898 185 120 185C84.1015 185 55 155.898 55 120Z"
          fill="#6C47FF"
        />
        <circle cx="120" cy="120" r="30" fill="#6C47FF" />
      </svg>
    </div>
  ),
  prisma: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 24 24"
        fill="#2D3748"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 0L.987 6.444l.032 11.233L12 24l10.981-6.323.032-11.233L12 0zm7.151 16L12 20.088 4.849 16l.031-8L12 3.912 19.151 8l.031 8z" />
        <path d="M12 6L6 9.5v5L12 18l6-3.5v-5L12 6zm4 8.5L12 17l-4-2.5v-3.5L12 8.5l4 2.5v3.5z" />
      </svg>
    </div>
  ),
  postman: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 24 24"
        fill="#FF6C37"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M15.44.22c-.22-.16-.54-.18-.78-.05L1.87 6.55c-.24.13-.39.38-.39.66v11.58c0 .28.15.53.39.66l12.79 6.38c.24.12.56.1.78-.05.21-.16.34-.41.34-.68V.9c0-.27-.13-.52-.34-.68zM14 22.12L3.5 16.87V7.12L14 1.87v20.25zM17.44.22c-.22-.16-.54-.18-.78-.05-.24.13-.39.38-.39.66V22.42c0 .27.13.52.34.68.22.15.54.17.78.05l5.73-2.86c.24-.12.39-.38.39-.66V1.56c0-.28-.15-.53-.39-.66L17.44.22zM21.5 18.84l-3.5 1.75V3.41l3.5 1.75v13.68z" />
      </svg>
    </div>
  ),
  swagger: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 24 24"
        fill="#85EA2D"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <path d="M12 4C7.582 4 4 7.582 4 12s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
        <path d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z" />
      </svg>
    </div>
  ),
  openai: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 24 24"
        fill="#412991"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-4.103-2.903 6.049 6.049 0 0 0-5.18.963 6.056 6.056 0 0 0-4.103-2.903 6.056 6.056 0 0 0-5.18.963A5.985 5.985 0 0 0 .544 5.83a6.046 6.046 0 0 0 4.103 2.903 6.049 6.049 0 0 0 5.18-.963 6.056 6.056 0 0 0 4.103 2.903 6.056 6.056 0 0 0 5.18-.963 5.985 5.985 0 0 0 3.173 1.112zM12 10.8a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2z" />
      </svg>
    </div>
  ),
  vite: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiVite size={Number(size) * 0.7} color="#646CFF" {...props} />
    </div>
  ),
  chartjs: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiChartdotjs size={Number(size) * 0.7} color="#FF6384" {...props} />
    </div>
  ),
  chromeExtensionsApi: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiGooglechrome size={Number(size) * 0.7} color="#4285F4" {...props} />
    </div>
  ),
  indexeddb: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 24 24"
        fill="#336791"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 18c-5.52 0-10-2.02-10-4.5v-3.5c1.47 1.22 4.96 2.02 10 2.02s8.53-.8 10-2.02v3.5c0 2.48-4.48 4.5-10 4.5zm0-9c-5.52 0-10-2.02-10-4.5v-3.5c1.47 1.22 4.96 2.02 10 2.02s8.53-.8 10-2.02v3.5c0 2.48-4.48 4.5-10 4.5z" />
      </svg>
    </div>
  ),
  express: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiExpress size={Number(size) * 0.7} color="black" {...props} />
    </div>
  ),
  vercel: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiVercel size={Number(size) * 0.7} color="black" {...props} />
    </div>
  ),
  reactQuery: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiReactquery size={Number(size) * 0.7} color="#FF4154" {...props} />
    </div>
  ),
  socketio: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <SiSocketdotio size={Number(size) * 0.7} color="black" {...props} />
    </div>
  ),
  reactWindow: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 24 24"
        fill="#61DAFB"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h4v2H8v-2z" />
      </svg>
    </div>
  ),
  rsaEncryption: ({ size = 50, className, ...props }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 24 24"
        fill="#4A5568"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.5 1.1 2.5 2.5V11h.5c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h.5V9.5C8.5 8.1 9.6 7 11 7h1zm0 1c-.8 0-1.5.7-1.5 1.5V11h3V9.5c0-.8-.7-1.5-1.5-1.5z" />
      </svg>
    </div>
  ),
  "LocalStorage / IndexedDB": ({
    size = 50,
    className,
    ...props
  }: LucideProps) => (
    <div
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-xl bg-white shadow-sm ${className}`}
    >
      <svg
        width={Number(size) * 0.7}
        height={Number(size) * 0.7}
        viewBox="0 0 24 24"
        fill="#336791"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 18c-5.52 0-10-2.02-10-4.5v-3.5c1.47 1.22 4.96 2.02 10 2.02s8.53-.8 10-2.02v3.5c0 2.48-4.48 4.5-10 4.5zm0-9c-5.52 0-10-2.02-10-4.5v-3.5c1.47 1.22 4.96 2.02 10 2.02s8.53-.8 10-2.02v3.5c0 2.48-4.48 4.5-10 4.5z" />
      </svg>
    </div>
  ),
  gmail: SiGmail,
  twitter: SiTwitter,
  linkedin: SiLinkedin,
  userFill: BiSolidUser,
  work: HiBriefcase,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  successAnimated: ({ ...props }: LucideProps) => (
    <div className="svg-container">
      <svg
        className="ft-green-tick"
        xmlns="http://www.w3.org/2000/svg"
        height="5rem"
        width="5rem"
        viewBox="0 0 48 48"
        aria-hidden="true"
        {...props}
      >
        <circle className="circle" cx="24" cy="24" r="22" />
        <path
          className="tick"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M14 27l5.917 4.917L34 17"
        />
      </svg>
    </div>
  ),
  retro: Palette,
  cyberpunk: Zap,
  paper: Scroll,
  aurora: Sparkles,
  synthwave: Music,
};
