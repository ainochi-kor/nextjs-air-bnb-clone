### svg import setting

> yarn add babel-plugin-inline-react-svg

### .env.local 파일 생성

> JWT_SECRET=my_private_secret
> AWS_S3_ACCESSKEY_ID=my_private_secret
> AWS_S3_SECRET_ACCESSKEY_ID=my_private_secret
> AWS_S3_BUCKET_NAME=my_private_secret

### AWS S3 설정

#### IAM
- 액세스 관리 - 사용자
- 사용자 추가 - AmazonS3FullAccess 정책

#### S3
- 버킷 만들기
- 퍼블릭 액세스 차단을 위한 버킷 설정에서 []모든 퍼블릭 액세스 차단 Uncheck.