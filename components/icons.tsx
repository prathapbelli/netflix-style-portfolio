
import React from 'react';

const iconProps = {
    className: "w-full h-full"
};

export const PythonIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="Python" {...iconProps} />;
export const FastApiIcon: React.FC = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://cdn.simpleicons.org/fastapi/009688'; }} />;
export const PostgreSqlIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="PostgreSQL" {...iconProps} />;
export const PySparkIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg" alt="PySpark" {...iconProps} />;
export const GitActionsIcon: React.FC = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" alt="Git Actions" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://cdn.simpleicons.org/githubactions/2088FF'; }} />;
export const KeycloakIcon: React.FC = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keycloak/keycloak-original.svg" alt="Keycloak" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://www.vectorlogo.zone/logos/keycloak/keycloak-icon.svg'; }} />;
export const KubernetesIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="Kubernetes" {...iconProps} />;
export const S3Icon: React.FC = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" alt="AWS S3" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://cdn.simpleicons.org/amazons3/569A31'; }} />;
export const JavaIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Java" {...iconProps} />;
export const PhpIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/php/php-icon.svg" alt="PHP" {...iconProps} />;
export const NodeJsIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="Node.js" {...iconProps} />;
export const FfmpegIcon: React.FC = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ffmpeg/ffmpeg-original.svg" alt="FFmpeg" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://www.vectorlogo.zone/logos/ffmpeg/ffmpeg-icon.svg'; }} />;
export const CloudflareIcon: React.FC = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" alt="Cloudflare" {...iconProps} />;
export const NovuIcon: React.FC = () => <img src="https://cdn.simpleicons.org/novu/000000" alt="Novu" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://www.vectorlogo.zone/logos/novu/novu-icon.svg'; }} />;
export const VespaIcon: React.FC = () => <img src="https://cdn.simpleicons.org/vespa/000000" alt="Vespa" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://www.vectorlogo.zone/logos/vespa/vespa-icon.svg'; }} />;
export const PandasIcon: React.FC = () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://cdn.simpleicons.org/pandas/150458'; }} />;
export const TemporalIcon: React.FC = () => <img src="https://cdn.simpleicons.org/temporal/000000" alt="Temporal" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://www.vectorlogo.zone/logos/temporalio/temporalio-icon.svg'; }} />;
export const PosticoIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/postico/postico-icon.svg" alt="Postico" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://cdn.simpleicons.org/postgresql/336791'; }} />;
export const PgAnalyserIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/pg_analyser/pg_analyser-icon.svg" alt="PgAnalyser" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://cdn.simpleicons.org/postgresql/336791'; }} />;
export const AtlasIcon: React.FC = () => <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="Atlas" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://www.vectorlogo.zone/logos/mongodb_atlas/mongodb_atlas-icon.svg'; }} />;
export const DbmateIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/dbmate/dbmate-icon.svg" alt="Dbmate" {...iconProps} onError={(e) => { e.currentTarget.src = 'https://cdn.simpleicons.org/postgresql/336791'; }} />;
export const HerokuIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="Heroku" {...iconProps} />;
export const NetlifyIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="Netlify" {...iconProps} />;
export const RubyOnRailsIcon: React.FC = () => <img src="https://www.vectorlogo.zone/logos/rubyonrails/rubyonrails-icon.svg" alt="Ruby on Rails" {...iconProps} />;