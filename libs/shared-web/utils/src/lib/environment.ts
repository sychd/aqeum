export function isDevelopment() {
  console.log(process.env.NODE_ENV);
  return process.env.NODE_ENV === 'development';
}
