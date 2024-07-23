import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider as _QueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren, useMemo } from "react";
import { useToast } from "./components/ui/use-toast";

export const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const { toast } = useToast();

  const queryClient = useMemo(() => {
    return new QueryClient({
      queryCache: new QueryCache({
        onError(error) {
          toast({
            title: error.message,
            variant: "destructive",
          });
        },
      }),
      mutationCache: new MutationCache({
        onError(error) {
          toast({
            title: error.message,
            variant: "destructive",
          });
        },
      }),
    });
  }, [toast]);

  return (
    <_QueryClientProvider client={queryClient}>{children}</_QueryClientProvider>
  );
};
