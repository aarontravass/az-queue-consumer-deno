import { Buffer } from "./depts.ts";

export const getValueInConnString = (
  connectionString: string,
  argument:
    | "QueueEndpoint"
    | "AccountName"
    | "AccountKey"
    | "DefaultEndpointsProtocol"
    | "EndpointSuffix"
    | "SharedAccessSignature"
): string => {
  const elements = connectionString.split(";");
  for (const element of elements) {
    if (element.trim().startsWith(argument)) {
      return element.trim().match(argument + "=(.*)")![1];
    }
  }
  return "";
};

export const parseConnectionString = (connectionString: string) => {
  let queueEndpoint: string, accountName: string, accountKey: string;
  accountKey = new Buffer(new TextDecoder('', {}));
};
