## Resume

This is just resume.

## Usage

```bash
$ yarn
$ yarn start 
```

## First Deployment

Create bucket on GCP(Google Cloud Storage).

```bash
$ yarn build
```

Upload `build/` to Google Cloud Storage, and then click the icon in the same page that lets you open a Google Cloud Shell to your app instance. 

```bash
$ mkdir resume
$ gsutil rsync -r gs://bucketname ./resume
$ gcloud app deploy
```

`https://[app_name].appspot.com` is your app url.