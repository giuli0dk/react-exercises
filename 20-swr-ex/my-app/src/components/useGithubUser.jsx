import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const useGithubUser = (username) => {
    const { data, error, mutate } = useSWR(
        username ? `https://api.github.com/users/${username}` : null,
        fetcher
    );

    const refetch = () => {
        mutate();
    };

    return {
        user: data,
        error,
        loading: !error && !data,
        refetch,
    };
};

export default useGithubUser;