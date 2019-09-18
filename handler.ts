import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import service from './src/service';
import {handler as io} from './src/io/responces';

export const func1: APIGatewayProxyHandler = async (event, _context) => {
  const result = service.func1(event);
  return io.reutrnSuccess(result);
}

export const func2: APIGatewayProxyHandler = async (event, _context) => {
  const result = service.func2(event);
  return io.reutrnSuccess(result);
}
